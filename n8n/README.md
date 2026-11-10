# n8n Workflows

| File | Owner | Branch | What it does |
|---|---|---|---|
| `expiry-check.json` | Member 3 | `feat/n8n-expiry` | Every day 8 AM: calculate & save discounts → get expiring products → email manager |
| `notifications.json` | Member 4 | `feat/notifications` | Department alerts to employees (+ optional Gemini AI) |

## Import a workflow
1. Open the `.json` file in Notepad → **Ctrl+A**, **Ctrl+C**.
2. In n8n, create a new workflow → click the canvas → **Ctrl+V**.
3. Open each Postgres node → **Credential → Create New** → use the Supabase details.
4. Open the Gmail node → connect your Google account → set the recipient.

## Export after changes (do this before every commit)
1. In n8n: **⋯ menu → Download**.
2. Replace the file in this folder with the same name.
3. Check the file has no passwords (n8n exports credential **names** only, not the passwords).

---

## Department alerts (`notifications.json`)

**Owner:** Member 4 (Nayma) · Tasks 4.1–4.4

Every morning at **8:15 AM** each active employee gets one email with **only their own department's** products that need work today. The manager's full report comes from `expiry-check.json` at 8:00 AM.

### What each node does
| # | Node | What it does |
|---|---|---|
| 1 | **Every Morning 8:15 AM** | Starts the workflow every day, 15 minutes after the expiry check |
| 2 | **Get Department Items** | One row per active employee (`role = 'employee'`, `is_active = TRUE`) with their department's products that expire within 3 days and have `quantity > 0`. Employees with nothing to do get no row, so no email. |
| 3 | **Gemini Tip (optional)** | Asks Gemini for one discount tip per department (task 4.3). **Off by default.** When off or if it fails, the email is sent without the tip. |
| 4 | **Build Department Emails** | Builds the HTML email from the layout in `email-templates/department-alert.html`. Readable copy of the code: `email-templates/build-department-emails.js` |
| 5 | **Email Employee** | Sends one Gmail email per employee |

The email groups products the same way as `expiry-check.json`: expired → remove from shelf, 0–1 days left → 30% off, 2–3 days left → 20% off. The SQL calculates the discount with the same rule, so the prices in the email are right even if the expiry check runs late.

### Set up
1. Import `notifications.json` (see **Import a workflow** above).
2. **Get Department Items** → create a Postgres credential. In Supabase: **Connect → Direct → Session pooler** and copy the connection parameters:
   | Field | Value |
   |---|---|
   | Host | `aws-…pooler.supabase.com` (from Supabase) |
   | Database | `postgres` |
   | User | `postgres.<project-ref>` |
   | Password | your Supabase database password |
   | Port | `5432` |
   | SSL | Require |

   Use the **Session pooler**, not the direct connection. The direct connection on the free plan does not work from n8n Cloud.
3. **Email Employee** → **Sign in with Google**.
4. **Build Department Emails** → replace `DASHBOARD_URL` at the top of the code with the Budibase employee stock page link.

### Test
1. In Supabase SQL Editor, send Anu's email to yourself:
   ```sql
   UPDATE employees SET email = 'your-email@gmail.com' WHERE full_name = 'Anu Thomas';
   ```
2. In n8n click **Execute**. All nodes turn green, 4 items (Bakery, Dairy, Meat, Vegetables).
3. You get **"Dairy: 4 products to handle today"** with only Dairy items: Eggs (remove), Milk and Paneer (30% off), Curd (20% off). This is test plan #5.

The other three emails go to `@example.com` addresses, so Gmail may send you a "delivery failed" message. That is expected.

### Turn on Gemini (optional, task 4.3)
1. Get a free API key at [aistudio.google.com](https://aistudio.google.com).
2. **Gemini Tip (optional)** → create a **Header Auth** credential: Name `x-goog-api-key`, Value = your key.
3. Right-click the node → **Activate**, then run the workflow again. The email shows an "AI suggestion" box.
4. If Google renames the model, change `gemini-2.5-flash` in the node's URL.

### Go live
Click **Publish** only on the shared n8n workspace (Day 5), after switching the Postgres credential to the shared Supabase. Published workflows send emails every morning.
