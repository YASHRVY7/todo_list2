# Todo List Application

A fullstack Todo List app built with Angular (frontend) and Node.js/Express with PostgreSQL (backend).

![image](https://github.com/user-attachments/assets/61b82879-1f2e-49e9-9611-2c31531701c3)


## Features

- Add, edit, complete, and delete todos
- Persistent storage with PostgreSQL
- RESTful API backend
- Modern Angular frontend with theme toggle

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- [Angular CLI](https://angular.io/cli)
- [PostgreSQL](https://www.postgresql.org/)

---

## Project Structure

```
todo/
  ├── src/                # Angular frontend source
  ├── todo-backend/       # Node.js/Express backend
  ├── package.json        # Angular dependencies
  └── README.md           # This file
```

---

## Backend Setup (`todo-backend`)

1. **Install dependencies:**
   ```bash
   cd todo-backend
   npm install
   ```

2. **Configure environment variables:**

   Create a `.env` file in `todo-backend/` with:
   ```
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/yourdbname


3. **Set up the database:**

   Create a PostgreSQL database and a `todos` table:
   ```sql
   CREATE TABLE todos (
     id SERIAL PRIMARY KEY,
     text VARCHAR(255) NOT NULL,
     completed BOOLEAN DEFAULT FALSE
   );
   ```

4. **Start the backend server:**
   ```bash
   node index.js
   ```
   The backend will run on `http://localhost:5000` (or your specified `PORT`).

---

## Frontend Setup (Angular)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the Angular development server:**
   ```bash
   ng serve
   ```
   The frontend will run on `http://localhost:4200`.

3. **API Configuration:**
   - Ensure the Angular app's API calls point to the backend (default: `http://localhost:5000`).
   - If needed, update the API URL in your Angular service (e.g., `src/app/services/todo.service.ts`).

---

## Running the App

1. **Start the backend** (`todo-backend/index.js`)
2. **Start the frontend** (`ng serve`)
3. Open [http://localhost:4200](http://localhost:4200) in your browser.

---

## Available Scripts

### Backend

- `npm install` — Install backend dependencies
- `node index.js` — Start backend server

### Frontend

- `npm install` — Install frontend dependencies
- `ng serve` — Start Angular dev server
- `ng build` — Build Angular app for production
- `ng test` — Run unit tests

---

## API Endpoints

- `POST   /todos` — Add a new todo
- `GET    /todos` — Get all todos
- `PUT    /todos/:id` — Update completion status
- `PUT    /todos/edit/:id` — Edit todo text
- `DELETE /todos/:id` — Delete a todo

---

## Environment Variables

Backend (`todo-backend/.env`):

- `PORT` — Port for backend server
- `DB_HOST` — PostgreSQL host
- `DB_USER` — PostgreSQL user
- `DB_PASSWORD` — PostgreSQL password
- `DB_NAME` — PostgreSQL database name
- `DB_PORT` — PostgreSQL port

---

