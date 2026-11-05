# Alert email layouts (task 4.1)

Two HTML emails, sent by n8n every morning at 8:00 AM. Open either `.html` file in a browser to see it with sample data (the demo database on Thu 5 Nov 2026).

| File | Who gets it | Built by |
|---|---|---|
| `manager-alert.html` | Store manager: all departments | `expiry-check.json` (Member 3) |
| `department-alert.html` | Each active employee: **only their department** | `notifications.json` (Member 4) |

Both use the same groups and colours, so the manager and the staff see the same priorities.

| Group | Rule (same as the SQL in `expiry-check.json`) | Colour |
|---|---|---|
| Expired: remove from shelf | `expiry_date < CURRENT_DATE` | red `#D92D20` |
| 0–1 days left: 30% off | `expiry_date - CURRENT_DATE <= 1` | orange `#EF6820` |
| 2–3 days left: 20% off | `expiry_date - CURRENT_DATE <= 3` | yellow `#EAAA08` |

Only products with `quantity > 0` are listed. If nothing is in any group, **no email is sent** (manager or department).

## Subject lines

| Email | Subject | Example |
|---|---|---|
| Manager | `Expiry Alert: {total} products need attention today ({expired} expired)` | Expiry Alert: 11 products need attention today (1 expired) |
| Department | `{department}: {total} products to handle today` | Dairy: 4 products to handle today |

Leave out `({expired} expired)` when it is 0.

## Fields

### Manager email
| Field | Where it comes from |
|---|---|
| `total`, counts per group | count of rows in each group |
| `at_risk` | `SUM(quantity * price)` of non-expired rows in the list |
| `recovered` | `SUM(quantity * price * (100 - discount_percent) / 100)` of the same rows |
| `lost` | `SUM(quantity * price)` of expired rows |
| per row: `product_name`, `department`, `quantity`, `expiry_date`, `price`, new price | `products` JOIN `departments`; new price = `ROUND(price * (100 - discount_percent) / 100, 2)` |
| "By department" table | group the rows by department; "Alert sent to" = active employees of that department |
| `dashboard_url` | Budibase app link to `/manager/overview` |

### Department email
| Field | Where it comes from |
|---|---|
| `first_name`, `department` | `employees` (`role = 'employee'`, `is_active = TRUE`) JOIN `departments` |
| rows | same query as the manager email, filtered by `department_id` of the employee |
| AI suggestion block | optional (task 4.3). Leave the whole block out if Gemini is not used or returns nothing |
| `dashboard_url` | Budibase app link to `/employee/stock` |

Expiry wording: `Yesterday` / `Today` / `Tomorrow` / `In N days`, with the date underneath (`6 Nov`).
Sort rows inside each group by `expiry_date`, then `product_name`.

## Using it in n8n

1. In a **Code** node, build the HTML string from the query rows. Copy the row markup from these files and repeat it for each product. Skip a whole section when its group is empty.
2. In the **Gmail** node set **Email Type = HTML** and **Message = `{{ $json.html }}`**.
3. Send only the part between `<!-- EMAIL START -->` and `<!-- EMAIL END -->`. Gmail ignores `<head>`.

## Rules for editing the layout
- Keep every style **inline** (`style="..."`). Gmail removes most `<style>` blocks.
- Use tables for layout, not flexbox or grid. Outlook and older Gmail apps need tables.
- Max width is 600px. The layout also works at phone width (about 360px).
- Use `&#8377;` for the rupee sign so it shows on every device.
- Gmail cuts off emails over about 100 KB. A normal day is well under that.
