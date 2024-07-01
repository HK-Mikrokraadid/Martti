const db = require('../db');

// Kõikide todos-de toomine

// Siin me ei pea tegelikult try-catchi kasutama, kuna nüüd püüab vea kinni errorHandler
const getAll = async () => {
  const result = await db.query(`
    SELECT
      users.id AS user_id, users.firstName, users.lastName, users.email,
      todos.id, todos.title, todos.description, todos.is_done, todos.created_at
    FROM todos
    INNER JOIN users
    ON todos.user_id = users.id
    WHERE todos.deleted_at IS NULL;
  `);
  return result[0];
};

const getById = async (id) => {
  const [result] = await db.query('SELECT * FROM todos WHERE id = ? AND deleted_at IS NULL;', [id]);
  return result[0];
};

// Uue todo loomine
const create = async (newTodo) => {
  const [result] = await db.query('INSERT INTO todos SET ?;', [newTodo]);
  return result.insertId;
};

const deleteById = async (id) => {
  await db.query('UPDATE todos SET deleted_at = NOW() WHERE id = ?;', [id]);
  return true;
};

const update = async (id, todo) => {
  await db.query('UPDATE todos SET ? WHERE id = ?;', [todo, id]);
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  update,
};
