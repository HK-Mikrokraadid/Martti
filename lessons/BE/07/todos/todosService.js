/* eslint-disable no-param-reassign */
const db = require('../db');

// Kõikide todos-de toomine
const getAll = async () => {
  try {
    const result = await db.query('SELECT * FROM todos WHERE deleted_at IS NULL;');
    return result[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Todo toomine ID järgi
const getById = async (id) => {
  try {
    const [result] = await db.query('SELECT * FROM todos WHERE id = ? AND deleted_at IS NULL;', [id]);
    return result[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Uue todo loomine
const create = async (newTodo) => {
  try {
    /* const [result] = await db.query(
      'INSERT INTO todos SET user_id = ?, title = ?, description = ?;',
      [newTodo.userId, newTodo.title, newTodo.description]
    ); */
    const [result] = await db.query('INSERT INTO todos SET ?;', [newTodo]);
    return result.insertId;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const deleteById = async (id) => {
  try {
    const [result] = await db.query('UPDATE todos SET deleted_at = NOW() WHERE id = ?;', [id]);
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const update = async (id, todo) => {
  try {
    const [result] = await db.query('UPDATE todos SET ? WHERE id = ?;', [todo, id]);
    console.log(result);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
  update,
};
