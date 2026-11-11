# n8n Workflows

| File | Owner | Branch | What it does |
|---|---|---|---|
| `expiry-check.json` | Member 3 | `feat/n8n-expiry` | Every day 8 AM: calculate & save discounts → get expiring products → email manager |
| `notifications.json` | Member 4 | `feat/notifications` | Department alerts to employees (+ optional Gemini AI) |

## How it connects

All tools share one PostgreSQL database hosted on Supabase. The database is the contract: every part reads and writes the same tables.

```
            ┌──────────────── Supabase (PostgreSQL) ────────────────┐
            │  departments · employees · products · customer_offers │
            └───────▲───────────────▲──────────────────▲────────────┘
                    │               │                  │
       n8n workflows│      Budibase dashboards         │ Public offers page
   writes discounts,│      read/edit products,         │ reads the customer_offers
   sends emails     │      employees, departments      │ view (read-only)
```

### What `expiry-check.json` does

```
Every Morning 8 AM          starts the run (only after the workflow is Published)
        ↓
Calculate & Save Discounts  UPDATE products: ≤1 day left → 30%, ≤3 days → 20%,
        ↓                   expired → 0% + "EXPIRED - Remove from shelf"
Get Products Needing        one row: total = number of products,
Attention                   product_list = text list for the email
        ↓
Any Products?               total > 0 ? continue : stop (no email)
        ↓
Email Manager (Gmail)       subject/body filled with {{ $json.total }} and
                            {{ $json.product_list }}
```

`products_live` and `customer_offers` are **views**. They work out the discount from today's date every time they are read, with the same rules as this workflow, so the dashboards and offers page are right even before n8n runs. n8n saves the discount in the `products` table and sends the email. It never writes to the views.

## Connect n8n to Supabase

n8n Cloud can't reach Supabase's direct connection (`db.xxx.supabase.co`), so use the **Session pooler**:

1. In Supabase, click **Connect** → **Direct (Connection string)** → Method: **Session pooler** → **View parameters**.
2. In n8n, open a Postgres node → **Credential → Create new credential** and fill in:

| Field | Value |
|---|---|
| Host | the pooler host, e.g. `aws-0-eu-west-1.pooler.supabase.com` |
| Database | `postgres` |
| User | `postgres.<project-id>` (with the dot and the project ID) |
| Password | the Supabase database password |
| Port | `5432` |
| SSL | **Require** |
| Ignore SSL Issues | **ON** (otherwise: "self-signed certificate in certificate chain") |

3. Select the **same** credential in every Postgres node.

**Day 5 (shared database):** only edit this credential to use the shared Supabase details. The workflow itself doesn't change.

## Import a workflow
1. In n8n, create a new workflow → **⋯ menu → Import → From File** → choose the `.json` file.
   (Or open the file, **Ctrl+A**, **Ctrl+C**, click the n8n canvas, **Ctrl+V**.)
2. Open each Postgres node → select or create the credential (see above).
3. Open the Gmail node → **Sign in with Google** → set **To** to a real address (`manager@example.com` doesn't exist and will bounce).
4. Click **Execute** to test. Click **Publish** to turn on the daily schedule.

## Export after changes (do this before every commit)
1. In n8n: **⋯ menu → Export JSON**.
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
**Status: future scope.** The Gemini node is built into the workflow but is switched off and has not been tested yet. Today the emails are sent without the AI tip.

**What it adds:** the discount rule only looks at days left. Gemini also looks at quantity, and suggests a bigger discount and a shelf tip for the product most likely to go unsold. It only suggests; it never changes a price.

To turn it on later:
1. Get a free API key at [aistudio.google.com](https://aistudio.google.com).
2. **Gemini Tip (optional)** → create a **Header Auth** credential: Name `x-goog-api-key`, Value = your key.
3. Right-click the node → **Activate**, then run the workflow again. The email shows an "AI suggestion" box.
4. If Google renames the model, change `gemini-2.5-flash` in the node's URL.

### Go live
Click **Publish** only on the shared n8n workspace (Day 5), after switching the Postgres credential to the shared Supabase. Published workflows send emails every morning.
