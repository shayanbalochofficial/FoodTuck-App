# Guide to Import Data into Sanity

This guide provides step-by-step instructions to set up a project and import data into Sanity for the `Food` and `Chef` models.

---

## **Step 1: Clone the Repository**

Start by cloning the repository containing the Sanity project and import scripts:

Use Github Desktop to clone the repo `( Recommended )`

or

```bash
git clone https://github.com/mubashirimtiaz/sanity-nextjs.git
cd sanity-nextjs
```

---

## **Step 2: Install Dependencies**

Run the following command to install all required packages:

```bash
npm install
```

---

## **Step 3: Configure Environment Variables**

1. Create a `.env.local` file in the root of the project directory:

2. Open `.env.local` and add the following environment variables:

   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID="{your-sanity-project-id}"
   NEXT_PUBLIC_SANITY_DATASET="production"
   SANITY_API_TOKEN="{your-sanity-api-token}"
   ```

   - **`NEXT_PUBLIC_SANITY_PROJECT_ID`**: Found in your Sanity project.
   - **`SANITY_API_TOKEN`**: Generate a token by navigating to **Settings > API > Add API Token** in your Sanity dashboard. Give the token appropriate read/write permissions - Select `Developer`.
   - **`NEXT_PUBLIC_SANITY_DATASET`**: Set this to `production`.

---

## **Step 4: Import Data**

Run the following command to import sample data for `Food` and `Chef` models:

```bash
npm run import-data
```

---

## **Step 5: Verify the Data in Sanity Studio**

1. Go to your Sanity Studio project.
2. You should see two models:
   - **Food**
   - **Chef**
3. Each model will have some sample documents automatically populated after the import.

---

## **Troubleshooting Tips**

- Ensure that your API token has proper permissions to write data to your dataset.
- Double-check that your `NEXT_PUBLIC_SANITY_PROJECT_ID` and `SANITY_API_TOKEN` values are correct.
- If errors occur during data import, review the terminal logs for detailed messages.

---

By following these steps, you will successfully import sample data into your Sanity project and have functional models ready for use.
