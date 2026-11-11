-- Expiry Date Monitoring - PostgreSQL database
-- Run this once in pgAdmin / Supabase SQL editor / psql
-- WARNING: running it again deletes and recreates all tables

DROP VIEW  IF EXISTS customer_offers;
DROP VIEW  IF EXISTS products_live;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

-- 1. Departments
CREATE TABLE departments (
    id   SERIAL PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL
);

-- 2. Employees (login accounts are created in the dashboard tool;
--    this table stores who they are and which department they work in)
CREATE TABLE employees (
    id            SERIAL PRIMARY KEY,
    full_name     VARCHAR(100) NOT NULL,
    email         VARCHAR(150) UNIQUE NOT NULL,
    phone         VARCHAR(20),
    department_id INT REFERENCES departments(id),
    role          VARCHAR(20)  NOT NULL DEFAULT 'employee'
                  CHECK (role IN ('manager', 'employee')),
    is_active     BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at    TIMESTAMP    NOT NULL DEFAULT NOW()
);

-- 3. Products
CREATE TABLE products (
    id               SERIAL PRIMARY KEY,
    product_name     VARCHAR(100)  NOT NULL,
    department_id    INT           NOT NULL REFERENCES departments(id),
    quantity         INT           NOT NULL DEFAULT 0 CHECK (quantity >= 0),
    price            NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    expiry_date      DATE          NOT NULL,
    discount_percent INT           DEFAULT 0,
    action           VARCHAR(100)  DEFAULT 'No action',
    last_checked     TIMESTAMP
);

-- 4. Live product view (read-only, for the dashboards)
--    Calculates days left, discount and action from TODAY's date every time
--    it is read, so it is always up to date, even before n8n runs.
--    Same discount rules as the n8n workflow.
--    Dashboards READ from this view; add/edit/delete still go to "products".
CREATE VIEW products_live WITH (security_invoker = true) AS
SELECT
    p.id,
    p.product_name,
    p.department_id,
    d.name AS department,
    p.quantity,
    p.price,
    p.expiry_date,
    t.days_left,
    CASE
        WHEN t.days_left < 0  THEN 'Expired'
        WHEN t.days_left = 0  THEN 'Expires today'
        WHEN t.days_left <= 3 THEN 'Expiring soon'
        ELSE                       'Fresh'
    END AS status,
    r.discount_percent,
    r.action,
    ROUND(p.price * (100 - r.discount_percent) / 100, 2) AS offer_price,
    p.price * p.quantity AS stock_value,
    p.last_checked
FROM products p
JOIN departments d ON d.id = p.department_id
CROSS JOIN LATERAL (SELECT p.expiry_date - CURRENT_DATE AS days_left) t
CROSS JOIN LATERAL (
    SELECT
        CASE
            WHEN t.days_left < 0  THEN 0
            WHEN t.days_left <= 1 THEN 30
            WHEN t.days_left <= 3 THEN 20
            ELSE 0
        END AS discount_percent,
        CASE
            WHEN t.days_left < 0  THEN 'EXPIRED - Remove from shelf'
            WHEN t.days_left <= 1 THEN 'Apply 30% discount'
            WHEN t.days_left <= 3 THEN 'Apply 20% discount'
            ELSE 'No action'
        END AS action
) r;

-- 5. Customer offers (read-only view for the public offers page)
--    Built on products_live, so offers are always up to date.
CREATE VIEW customer_offers AS
SELECT
    product_name,
    department,
    price AS original_price,
    discount_percent,
    offer_price,
    expiry_date AS best_before
FROM products_live
WHERE discount_percent > 0
  AND days_left >= 0
  AND quantity > 0;

-- ---------- Sample data ----------

INSERT INTO departments (name) VALUES
('Dairy'), ('Bakery'), ('Meat'), ('Vegetables'),
('Fruits'), ('Beverages'), ('Snacks'), ('Grocery');

-- One employee per department, plus one inactive employee to test "deactivate"
INSERT INTO employees (full_name, email, phone, department_id, role, is_active)
SELECT v.full_name, v.email, v.phone, d.id, v.role, v.active
FROM (VALUES
    ('Store Manager', 'manager@example.com',  '9000000001', NULL,         'manager',  TRUE),
    ('Anu Thomas',    'anu@example.com',      '9000000002', 'Dairy',      'employee', TRUE),
    ('Rahul Nair',    'rahul@example.com',    '9000000003', 'Bakery',     'employee', TRUE),
    ('Fathima K',     'fathima@example.com',  '9000000004', 'Meat',       'employee', TRUE),
    ('Arjun Menon',   'arjun@example.com',    '9000000005', 'Vegetables', 'employee', TRUE),
    ('Sneha Pillai',  'sneha@example.com',    '9000000006', 'Fruits',     'employee', TRUE),
    ('Joel Mathew',   'joel@example.com',     '9000000007', 'Beverages',  'employee', TRUE),
    ('Riya Joseph',   'riya@example.com',     '9000000008', 'Snacks',     'employee', TRUE),
    ('Akhil Varghese','akhil@example.com',    '9000000009', 'Grocery',    'employee', TRUE),
    ('Vishnu Das',    'vishnu@example.com',   '9000000010', 'Dairy',      'employee', FALSE)
) AS v(full_name, email, phone, dept, role, active)
LEFT JOIN departments d ON d.name = v.dept;

-- 59 products. Dates are relative to today, so the demo always shows every case:
--   expired (< 0), today (0), 1 day, 2-3 days, more than 3 days.
-- Strawberries and Veg Sandwich have quantity 0 (out of stock),
-- so they must NOT appear in customer_offers even with a discount.
INSERT INTO products (product_name, department_id, quantity, price, expiry_date)
SELECT v.name, d.id, v.qty, v.price, CURRENT_DATE + v.days
FROM (VALUES
    -- Dairy
    ('Milk',            'Dairy',       20,  30.00,   1),
    ('Yogurt',          'Dairy',       30,  25.00,  10),
    ('Eggs',            'Dairy',       40,   7.00,  -1),
    ('Paneer',          'Dairy',       12,  90.00,   1),
    ('Butter',          'Dairy',       25,  60.00,  27),
    ('Cheese',          'Dairy',       14, 150.00,  21),
    ('Curd',            'Dairy',       35,  35.00,   2),
    ('Fresh Cream',     'Dairy',       10,  70.00,   0),
    ('Buttermilk',      'Dairy',       24,  15.00,  -2),
    ('Ghee',            'Dairy',       18, 550.00, 120),
    -- Bakery
    ('Bread',           'Bakery',      15,  45.00,   2),
    ('Cake',            'Bakery',       8, 350.00,   3),
    ('Buns',            'Bakery',      30,  20.00,   2),
    ('Croissant',       'Bakery',      12,  60.00,   0),
    ('Muffins',         'Bakery',      16,  40.00,   1),
    ('Pav',             'Bakery',      20,  35.00,  -1),
    ('Cookies',         'Bakery',      40,  80.00,  20),
    ('Rusk',            'Bakery',      35,  50.00,  90),
    -- Meat
    ('Chicken',         'Meat',        10, 240.00,   0),
    ('Fish',            'Meat',         6, 300.00,   1),
    ('Mutton',          'Meat',         5, 750.00,   2),
    ('Prawns',          'Meat',         8, 450.00,  -1),
    ('Sausages',        'Meat',        20, 180.00,  12),
    ('Chicken Nuggets', 'Meat',        15, 220.00,  60),
    -- Vegetables
    ('Tomatoes',        'Vegetables',  50,  40.00,   3),
    ('Spinach',         'Vegetables',  18,  30.00,   1),
    ('Coriander',       'Vegetables',  25,  10.00,   0),
    ('Mushrooms',       'Vegetables',  12,  60.00,   2),
    ('Cucumber',        'Vegetables',  30,  35.00,  -1),
    ('Carrots',         'Vegetables',  40,  50.00,   7),
    ('Onions',          'Vegetables',  90,  35.00,  25),
    ('Potatoes',        'Vegetables',  80,  30.00,  30),
    -- Fruits
    ('Bananas',         'Fruits',      60,  50.00,   4),
    ('Apples',          'Fruits',      45, 180.00,  16),
    ('Strawberries',    'Fruits',       0, 200.00,   1),
    ('Grapes',          'Fruits',      25,  90.00,   2),
    ('Papaya',          'Fruits',      15,  45.00,   3),
    ('Mangoes',         'Fruits',      40, 150.00,   5),
    ('Watermelon',      'Fruits',       6,  60.00,  -2),
    -- Beverages
    ('Orange Juice',    'Beverages',   22, 120.00,   6),
    ('Mango Juice',     'Beverages',   18, 110.00,   0),
    ('Lassi',           'Beverages',   20,  40.00,   1),
    ('Cold Coffee',     'Beverages',   16,  60.00,   3),
    ('Cola',            'Beverages',   60,  45.00, 180),
    ('Mineral Water',   'Beverages',  120,  20.00, 365),
    -- Snacks
    ('Biscuits',        'Snacks',      80,  30.00, 130),
    ('Veg Sandwich',    'Snacks',       0,  50.00,   0),
    ('Samosa',          'Snacks',      30,  15.00,   1),
    ('Popcorn',         'Snacks',      25,  40.00,  -3),
    ('Potato Chips',    'Snacks',      70,  20.00,  60),
    ('Chocolate Bar',   'Snacks',      50,  60.00,  90),
    -- Grocery
    ('Rice',            'Grocery',    100,  65.00, 270),
    ('Noodles',         'Grocery',     70,  15.00,  67),
    ('Idli Batter',     'Grocery',     20,  60.00,   1),
    ('Dosa Batter',     'Grocery',     18,  60.00,   0),
    ('Wheat Flour',     'Grocery',     60,  55.00, 150),
    ('Sugar',           'Grocery',     80,  45.00, 300),
    ('Cooking Oil',     'Grocery',     40, 160.00, 200),
    ('Tea Powder',      'Grocery',     35, 120.00, 240)
) AS v(name, dept, qty, price, days)
JOIN departments d ON d.name = v.dept;

-- ---------- Security ----------
-- Block the public Supabase API. Budibase and n8n connect as the "postgres"
-- user (the table owner), so they are not affected.
ALTER TABLE departments ENABLE ROW LEVEL SECURITY;
ALTER TABLE employees   ENABLE ROW LEVEL SECURITY;
ALTER TABLE products    ENABLE ROW LEVEL SECURITY;

-- ---------- Check ----------
-- How many products get each action (from the live view)
-- Expected: Apply 30% = 16, Apply 20% = 10, EXPIRED = 7, No action = 26
SELECT action, COUNT(*) AS products
FROM products_live
GROUP BY action
ORDER BY action;
