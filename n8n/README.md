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
