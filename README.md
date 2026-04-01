# ManavaSeva — NGO Platform

ManavaSeva is a full-stack NGO website (React frontend + Node/Express + MongoDB backend).

Features:
- Responsive React frontend (Vite) with Tailwind CSS
- Volunteer signup, contact forms, gallery, projects
- Admin dashboard for volunteers and projects
- Donation UI with mock payment flow
- REST API server with authentication (JWT), Mongoose models

Folders:
- `/client` — React frontend
- `/server` — Express backend

Getting started

1. Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB (local or Atlas)

2. Setup

In project root:

```bash
cd /home/rguktvalley/ManavaSeva

# Install server deps
cd server
npm install

# Install client deps
cd ../client
npm install
```

3. Environment

Copy example env files and set values.

Server: `/server/.env.example`
Client: `/client/.env.example`

4. Run locally (two terminals)

Terminal 1 — server:

```bash
cd server
npm run dev
```

Terminal 2 — client:

```bash
cd client
npm run dev
```

Seed sample data (optional):

```bash
cd server
node seed.js
```

API endpoints summary

- POST /api/auth/signup
- POST /api/auth/login
- POST /api/volunteer
- GET /api/volunteers (admin)
- CRUD /api/projects

Notes

- This is a starter production-ready layout. For production, set secure env variables, enable HTTPS, and configure a real payment gateway.
