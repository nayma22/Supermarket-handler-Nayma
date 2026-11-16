-- Merge duplicate stock instead of creating a new row.
-- Run once in the Supabase SQL Editor (shared database). Deletes nothing.
-- (database.sql already contains this for fresh installs.)
--
-- When a product is added (e.g. from the Budibase "Add stock" form) and a row
-- with the same product name (ignoring case and spaces), department and expiry
-- date already exists, the quantity is added to that row and the price is
-- updated. No new row is created.
-- A different expiry date is a different batch, so it still gets its own row.

CREATE OR REPLACE FUNCTION merge_duplicate_stock() RETURNS trigger
LANGUAGE plpgsql AS $$
DECLARE
    existing_id INT;
BEGIN
    SELECT id INTO existing_id
    FROM products
    WHERE lower(trim(product_name)) = lower(trim(NEW.product_name))
      AND department_id = NEW.department_id
      AND expiry_date   = NEW.expiry_date
    ORDER BY id
    LIMIT 1;

    IF existing_id IS NOT NULL THEN
        UPDATE products
        SET quantity = quantity + COALESCE(NEW.quantity, 0),
            price    = COALESCE(NEW.price, price)
        WHERE id = existing_id;
        RETURN NULL;   -- skip the insert, the existing row was updated
    END IF;

    RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS merge_duplicate_stock ON products;
CREATE TRIGGER merge_duplicate_stock
BEFORE INSERT ON products
FOR EACH ROW EXECUTE FUNCTION merge_duplicate_stock();
