const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ➕ Add Todo
app.post('/todos', async (req, res) => {
  const { text } = req.body;
  const result = await pool.query(
    'INSERT INTO todos (text) VALUES ($1) RETURNING *',
    [text]
  );
  res.json(result.rows[0]);
});

// 📄 Get All Todos
app.get('/todos', async (req, res) => {
  const result = await pool.query('SELECT * FROM todos ORDER BY id DESC');
  res.json(result.rows);
});

// ✅ Update Completion
app.put('/todos/:id', async (req, res) => {
  const { completed } = req.body;
  const { id } = req.params;
  await pool.query('UPDATE todos SET completed = $1 WHERE id = $2', [completed, id]);
  res.sendStatus(204);
});

// ✏️ Edit Todo Text
app.put('/todos/edit/:id', async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  await pool.query('UPDATE todos SET text = $1 WHERE id = $2', [text, id]);
  res.sendStatus(204);
});

// ❌ Delete Todo
app.delete('/todos/:id', async (req, res) => {
  await pool.query('DELETE FROM todos WHERE id = $1', [req.params.id]);
  res.sendStatus(204);
});

// Server Start
app.listen(process.env.PORT, () => {
  console.log(`✅ Server running at http://localhost:${process.env.PORT}`);
});
