const todos = require('./todos');

function getAll() {
  return todos;
}

function getById(id) {
  let todo = null;
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].id === id) {
      todo = todos[i];
      break;
    }
  }
  return todo;
}

module.exports = { getAll, getById };
