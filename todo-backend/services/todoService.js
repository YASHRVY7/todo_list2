const pool = require('../config/db');

class TodoService {
  async addTodo(text) {
    if (!text || text.trim() === '') {
      throw { status: 400, message: 'Todo text is required' };
    }

    const result = await pool.query(
      'INSERT INTO todos (text, completed) VALUES ($1, false) RETURNING *',
      [text]
    );

    if (result.rows.length === 0) {
      throw { status: 500, message: 'Failed to create todo' };
    }

    return result.rows[0];
  }

  async getTodos() {
    const result = await pool.query('SELECT * FROM todos ORDER BY id DESC');
    return result.rows;
  }

  async toggleTodo(id, completed) {
    const result = await pool.query(
      'UPDATE todos SET completed = $1 WHERE id = $2 RETURNING *',
      [completed, id]
    );

    if (result.rows.length === 0) {
      throw { status: 404, message: 'Todo not found' };
    }

    return result.rows[0];
  }

  async updateTodo(id, text) {
    if (!text || text.trim() === '') {
      throw { status: 400, message: 'Todo text cannot be empty' };
    }

    await pool.query('UPDATE todos SET text = $1 WHERE id = $2', [text, id]);
  }

  async deleteTodo(id) {
    const result = await pool.query(
      'DELETE FROM todos WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      throw { status: 404, message: 'Todo not found' };
    }

    return result.rows[0];
  }
}

module.exports = new TodoService();

