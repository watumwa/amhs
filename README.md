# Asaba Memorial High School website

This repository is organised as two applications:

- `frontend/` — the Next.js public website.
- `backend/` — reserved for the Django REST Framework API, admissions data and payment integrations.

## Run the frontend locally

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:3000`.

## Frontend quality checks

```bash
cd frontend
npm run lint
npm run build
```

The admissions, donation and child-sponsorship forms are frontend flows ready to connect to Django REST Framework endpoints before collecting real applications or payments.
