# Rentify — Apartment Renting & Selling

This repository contains a **Node.js + Express + MongoDB** backend and a React frontend that is served from the backend as static files.

## Folder Structure

- `backend/` — Express API (routes, controllers, models, middleware)
- `frontend/` — Vite React app (builds into `public/`)
- `public/` — built frontend (served by Express)
- `seeds/` — mongosh seed script (users + apartments)

## Quick Start (Local)

### 1) Run MongoDB

Make sure MongoDB is running locally or use MongoDB Atlas.

### 2) Configure Backend env

Copy env example:

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env` and set:
- `MONGODB_URI`
- `JWT_SECRET`

### 3) Install dependencies

```bash
cd backend
npm install
cd ../frontend
npm install
```

### 4) Seed database (mongosh)

In the project root:

```bash
mongosh "mongodb://127.0.0.1:27017/rentify" --file seeds/seed.mongosh.js
```

Seeded users:
- Admin: `admin@rentify.local` / `Admin123!`
- Government user: `gov@free-republic.local` / `Gov123!`
- Normal user: `user@rentify.local` / `User123!`

### 5) Build frontend into `public/`

```bash
cd frontend
npm run build
```

### 6) Start backend (serves frontend too)

```bash
cd backend
npm start
```

Open:
- Frontend: `http://localhost:3000`
- Health: `http://localhost:3000/api/health`

## Dev Mode (two terminals)

Terminal A:
```bash
cd backend
npm start
```

Terminal B:
```bash
cd frontend
npm run dev
```

- Frontend dev: `http://localhost:5173`
- Backend: `http://localhost:3000`

> In dev, CORS is enabled by `CORS_ORIGIN`.

## API Documentation

Base URL: `/api`

### Auth
- `POST /auth/register`
  - body: `{ name, email, password }`
- `POST /auth/login`
  - body: `{ email, password }`

### User (JWT required)
- `GET /users/profile`
- `PUT /users/profile`
  - body: `{ name?, email? }`

### Apartments
- `GET /apartments`
  - query: `type=rent|sale`, `city`, `rooms`, `minPrice`, `maxPrice`, `sort=price_asc|price_desc|newest`, `page`, `limit`
  - also: `owner=me` (JWT required) to return logged-in user's listings
- `GET /apartments/:id`
- `POST /apartments` (JWT required)
- `PUT /apartments/:id` (JWT required, owner or admin)
- `DELETE /apartments/:id` (JWT required, owner or admin)

### Requests (JWT required)
- `POST /apartments/:id/requests`
  - body: `{ name?, phone, message }`
- `GET /requests/my`

### Admin (admin JWT required)
- `GET /admin/apartments`
- `PATCH /admin/apartments/:id/hide`
- `DELETE /admin/apartments/:id`

## Screenshots

Add screenshots of:
- Register/Login
- Listings page (filters)
- Add listing
- Apartment details (send request)
- Profile page (delete listing)

