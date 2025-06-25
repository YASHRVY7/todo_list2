const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/todos', require('./routes/todoRoutes'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
    

// //  Get All Todos
// app.get('/todos', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM todos ORDER BY id DESC');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// //  Toggle Todo Completion
// app.patch('/todos/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { completed } = req.body;
//     const result = await pool.query(
//       'UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *',
//       [completed, id]
//     );
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// app.put('/todos/:id', async (req, res) => {
//   try {
//     const { completed } = req.body;
//     const { id } = req.params;
//     await pool.query('UPDATE todos SET completed = $1 WHERE id = $2', [completed, id]);
//     res.sendStatus(204);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// // Update Todo
// app.put('/todos/:id', async (req, res) => {
//   try {
//     const { text } = req.body;
//     const { id } = req.params;
    
//     if (!text || text.trim() === '') {
//       return res.status(400).json({ error: 'Todo text cannot be empty' });
//     }

//     await pool.query('UPDATE todos SET text = $1 WHERE id = $2', [text, id]);
//     res.sendStatus(204);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// app.delete('/todos/:id', async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     if (isNaN(id) || id <= 0) {
//       return res.status(400).json({ error: 'Invalid todo ID' });
//     }
//     const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);
//     if (result.rows.length === 0) {
//       res.status(404).json({ error: 'Todo not found' });
//     } else {
//       res.json(result.rows[0]);
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });


// app.listen(process.env.PORT, () => {
//   console.log(`✅ Server running at http://localhost:${process.env.PORT}`);
// });
