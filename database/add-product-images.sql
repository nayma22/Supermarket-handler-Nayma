-- Add product pictures to an EXISTING database without deleting any data.
-- Run once in the Supabase SQL Editor (shared database).
-- (database.sql already contains these changes for fresh installs.)
--
-- Before running:
--   1. Upload ALL pictures in database/product-images/ (8 department pictures +
--      the product pictures listed in step 3) to the PUBLIC Supabase Storage bucket "product-images".
--   2. The URLs below point to the shared Supabase project (uxzoipytinpxyeaqpmyc).

-- 1. New columns
ALTER TABLE departments ADD COLUMN IF NOT EXISTS image_url TEXT;
ALTER TABLE products    ADD COLUMN IF NOT EXISTS image_url TEXT;

-- 2. One default picture per department
UPDATE departments
SET image_url = 'https://uxzoipytinpxyeaqpmyc.supabase.co/storage/v1/object/public/product-images/'
                || lower(name) || '.jpg';

-- 3. One picture per product, named from the product name
--    (small letters, "-" instead of spaces), e.g. "Chicken Nuggets" -> chicken-nuggets.jpg
--    Only products listed here have their own picture; the others show the
--    department picture. Add a name here when you upload a new product picture.
UPDATE products
SET image_url = 'https://uxzoipytinpxyeaqpmyc.supabase.co/storage/v1/object/public/product-images/'
                || replace(lower(product_name), ' ', '-') || '.jpg'
WHERE replace(lower(product_name), ' ', '-') IN (
    'apples', 'bananas', 'biscuits', 'bread', 'buns', 'cake', 'carrots',
    'chicken', 'chicken-nuggets', 'chocolate-bar', 'cola', 'cold-coffee',
    'cookies', 'cooking-oil', 'coriander', 'croissant', 'cucumber', 'eggs',
    'fish', 'grapes', 'lassi', 'mango-juice', 'mangoes', 'milk', 'mineral-water',
    'muffins', 'mushrooms', 'mutton', 'noodles', 'onions', 'orange-juice',
    'papaya', 'popcorn', 'potato-chips', 'potatoes', 'prawns', 'rice', 'rusk',
    'samosa', 'sausages', 'spinach', 'strawberries', 'sugar', 'tea-powder',
    'tomatoes', 'veg-sandwich', 'watermelon', 'wheat-flour', 'yogurt'
);

-- 4. Add image_url to the views (new column at the end, nothing else changes)
CREATE OR REPLACE VIEW products_live WITH (security_invoker = true) AS
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
    p.last_checked,
    COALESCE(p.image_url, d.image_url) AS image_url
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

CREATE OR REPLACE VIEW customer_offers AS
SELECT
    product_name,
    department,
    price AS original_price,
    discount_percent,
    offer_price,
    expiry_date AS best_before,
    image_url
FROM products_live
WHERE discount_percent > 0
  AND days_left >= 0
  AND quantity > 0;

-- 5. Check: every product should have a picture URL
SELECT department, COUNT(*) AS products, COUNT(image_url) AS with_image
FROM products_live
GROUP BY department
ORDER BY department;
