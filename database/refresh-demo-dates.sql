-- Refresh the demo expiry dates WITHOUT deleting anything.
-- Run in the Supabase SQL Editor (shared database) before a demo, or whenever
-- the offers page looks empty because the sample dates are in the past.
--
-- Only the 59 sample products get a new expiry_date (same mix as database.sql):
--   expired (7), today / 1 day = 30% (16), 2-3 days = 20% (10), more than 3 days (26).
-- Quantities, prices, images and products added later by the team are not changed.

UPDATE products p
SET expiry_date = CURRENT_DATE + v.days
FROM (VALUES
    ('Milk',               1),
    ('Yogurt',            10),
    ('Eggs',              -1),
    ('Paneer',             1),
    ('Butter',            27),
    ('Cheese',            21),
    ('Curd',               2),
    ('Fresh Cream',        0),
    ('Buttermilk',        -2),
    ('Ghee',             120),
    ('Bread',              2),
    ('Cake',               3),
    ('Buns',               2),
    ('Croissant',          0),
    ('Muffins',            1),
    ('Pav',               -1),
    ('Cookies',           20),
    ('Rusk',              90),
    ('Chicken',            0),
    ('Fish',               1),
    ('Mutton',             2),
    ('Prawns',            -1),
    ('Sausages',          12),
    ('Chicken Nuggets',   60),
    ('Tomatoes',           3),
    ('Spinach',            1),
    ('Coriander',          0),
    ('Mushrooms',          2),
    ('Cucumber',          -1),
    ('Carrots',            7),
    ('Onions',            25),
    ('Potatoes',          30),
    ('Bananas',            4),
    ('Apples',            16),
    ('Strawberries',       1),
    ('Grapes',             2),
    ('Papaya',             3),
    ('Mangoes',            5),
    ('Watermelon',        -2),
    ('Orange Juice',       6),
    ('Mango Juice',        0),
    ('Lassi',              1),
    ('Cold Coffee',        3),
    ('Cola',             180),
    ('Mineral Water',    365),
    ('Biscuits',         130),
    ('Veg Sandwich',       0),
    ('Samosa',             1),
    ('Popcorn',           -3),
    ('Potato Chips',      60),
    ('Chocolate Bar',     90),
    ('Rice',             270),
    ('Noodles',           67),
    ('Idli Batter',        1),
    ('Dosa Batter',        0),
    ('Wheat Flour',      150),
    ('Sugar',            300),
    ('Cooking Oil',      200),
    ('Tea Powder',       240)
) AS v(name, days)
WHERE p.product_name = v.name;

-- Check: how many products get each status now
SELECT status, COUNT(*) AS products
FROM products_live
GROUP BY status
ORDER BY status;
