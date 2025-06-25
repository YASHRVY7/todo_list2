
---

# ✅ Todo List Application

A modern **full-stack Todo List** app built with **Angular 19**, **Node.js**, **Express.js**, and **PostgreSQL**.
=======

A modern **full-stack Todo List** app built with **Angular 19**, **Node.js**, **Express.js**, and **PostgreSQL**.

![image](https://github.com/user-attachments/assets/01f65760-9295-4a3c-b693-a82729d58dfb)


---

## ✨ Features

* Add, edit, complete, and delete tasks
* Toggle task completion status
* Real-time UI updates
* Material Design (Angular Material)
* RESTful API backend
* Persistent storage using PostgreSQL
* Dark/light theme toggle

---

## 📦 Tech Stack

* **Frontend:** Angular 19 + Angular Material
* **Backend:** Node.js + Express.js
* **Database:** PostgreSQL
* **Dev Tools:** TypeScript, ESLint, Prettier

---

## ✅ Prerequisites

Make sure the following are installed:

* **Node.js** (v18 or higher)
* **npm** (v9 or higher)
* **PostgreSQL** (with a database and table created)
* **Angular CLI**

---

## 🗂️ Project Structure

```
todo/
├── src/                     # Angular frontend
│   ├── app/                 # App components
│   └── modules/             # Feature modules
│       └── todo/            # Todo module
│           ├── models/      # Interfaces/Models
│           └── services/    # API communication
├── todo-backend/            # Express backend
│   ├── controllers/         # Controller functions
│   ├── routes/              # API routes
│   ├── services/            # DB service logic
│   ├── config/              # DB config
│   └── index.js             # Entry point
└── public/                  # Static files
```

---

## 🚀 Backend Setup (`todo-backend`)

### 1. Install dependencies:

```bash
cd todo-backend
npm install
```

---

### 2. Configure environment variables:

Create a `.env` file inside `todo-backend/`:

```
PORT=5000
DATABASE_URL=postgresql://your_user:your_password@localhost:5432/your_db_name
```

---

### 3. Set up the PostgreSQL database:

Run the following SQL to create the required table:

```sql
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);
```

---

### 4. Start the backend server:

```bash
node index.js
```

Your backend will run on [http://localhost:5000](http://localhost:5000)

---

## 💻 Frontend Setup (Angular)

### 1. Install frontend dependencies:

```bash
npm install
```

### 2. Start Angular development server:

```bash
ng serve
```

The app will be running at: [http://localhost:4200](http://localhost:4200)

---

### 3. API Configuration:

Make sure your Angular service file (e.g. `todo.service.ts`) points to the correct backend:

```ts
private apiUrl = 'http://localhost:5000/todos';
```

---

## 🧪 API Endpoints

| Method | Endpoint     | Description              |
| ------ | ------------ | ------------------------ |
| POST   | `/todos`     | Add a new todo           |
| GET    | `/todos`     | Get all todos            |
| PATCH  | `/todos/:id` | Toggle completion status |
| PUT    | `/todos/:id` | Update todo text         |
| DELETE | `/todos/:id` | Delete a todo            |

---

## 🛠 Available Scripts

### Backend

* `npm install` – Install backend dependencies
* `node index.js` – Start backend server

### Frontend

* `npm install` – Install frontend dependencies
* `ng serve` – Start development server
* `ng build` – Build app for production
* `ng test` – Run unit tests

---

## 🌐 Running the Full App

1. Start the backend:

   ```bash
   cd todo-backend
   node index.js
   ```

2. Start the frontend:

   ```bash
   cd ../
   ng serve
   ```

3. Visit: [http://localhost:4200](http://localhost:4200)

---



