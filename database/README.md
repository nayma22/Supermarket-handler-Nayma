# Database (PostgreSQL / Supabase)

**Owner:** Member 2 · **Branch:** `feat/database`

## Setup
1. Create a free project at [supabase.com](https://supabase.com).
2. **SQL Editor** → paste `database.sql` → **Run**.
3. Connection details: **Project Settings → Database** (host, port 5432, database `postgres`, user, password, SSL on).

`database.sql` drops and recreates all tables, so running it again resets the demo data.
**Tell the team before running it on the shared database:** anything added through Budibase or n8n will be deleted.

Expiry dates are relative to the day you run the script. Run it again before the demo so the dates are fresh.

## Security (RLS)
The script turns on Row Level Security for all 3 tables. This blocks the public Supabase API.
Budibase and n8n connect as the `postgres` user (the table owner), so they still have full access.

## Sample data
- **8 departments:** Dairy, Bakery, Meat, Vegetables, Fruits, Beverages, Snacks, Grocery
- **10 employees:** 1 manager, 1 employee per department, and 1 inactive Dairy employee (Vishnu Das) to test deactivation
- **59 products**, covering every expiry case:

| Case | Products | Examples |
|---|---|---|
| Expired | 7 | Eggs, Buttermilk, Pav, Prawns |
| Today / 1 day (30%) | 16 | Milk, Chicken, Croissant, Idli Batter |
| 2–3 days (20%) | 10 | Bread, Cake, Mutton, Grapes |
| More than 3 days | 26 | Rice, Ghee, Mineral Water |

**Out of stock (quantity 0):** Strawberries and Veg Sandwich. They get a discount but must **not** appear in `customer_offers`.

## Tables (the contract: don't rename without telling the team)

### departments
| Column | Type |
|---|---|
| id | SERIAL PK |
| name | VARCHAR(50), unique |

### employees
| Column | Type | Notes |
|---|---|---|
| id | SERIAL PK | |
| full_name | VARCHAR(100) | |
| email | VARCHAR(150), unique | Same email as the Budibase login |
| phone | VARCHAR(20) | |
| department_id | INT → departments.id | NULL for the manager |
| role | 'manager' / 'employee' | |
| is_active | BOOLEAN | |
| created_at | TIMESTAMP | |

### products
| Column | Type | Notes |
|---|---|---|
| id | SERIAL PK | |
| product_name | VARCHAR(100) | |
| department_id | INT → departments.id | |
| quantity | INT ≥ 0 | |
| price | NUMERIC(10,2) | |
| expiry_date | DATE | |
| discount_percent | INT | Set by n8n |
| action | VARCHAR(100) | Set by n8n |
| last_checked | TIMESTAMP | Set by n8n |

### products_live (view, read-only): use this in the dashboards
Calculates the discount from **today's date** every time it is read, so it is always up to date, even if n8n has not run yet. Uses the same discount rules as n8n (below).

| Column | Notes |
|---|---|
| id, product_name, department_id, quantity, price, expiry_date, last_checked | Same as `products` |
| department | Department name (no join needed) |
| days_left | Negative = already expired |
| status | 'Expired' / 'Expires today' / 'Expiring soon' (1–3 days) / 'Fresh' |
| discount_percent, action | Live values |
| offer_price | Price after discount |
| stock_value | price × quantity |

**Read** from `products_live`. **Add, edit and delete** still go to the `products` table.

Example for the manager overview:
```sql
SELECT
  COUNT(*) FILTER (WHERE status = 'Expired')                    AS expired,
  COUNT(*) FILTER (WHERE status = 'Expires today')              AS expiring_today,
  COUNT(*) FILTER (WHERE discount_percent > 0 AND quantity > 0) AS active_offers,
  SUM(stock_value) FILTER (WHERE days_left <= 3)                AS value_at_risk
FROM products_live;
```

### customer_offers (view, read-only)
`product_name, department, original_price, discount_percent, offer_price, best_before`

Built on `products_live`. Shows only products with a discount, not expired and in stock.

## Discount rules
| Days left | discount_percent | action |
|---|---|---|
| < 0 | 0 | EXPIRED - Remove from shelf |
| 0–1 | 30 | Apply 30% discount |
| 2–3 | 20 | Apply 20% discount |
| > 3 | 0 | No action |
