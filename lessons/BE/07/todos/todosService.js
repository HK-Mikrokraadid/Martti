/* eslint-disable no-param-reassign */
const todos = require('./todos');

// Kõikide todos-de toomine
const getAll = () => todos;

// Todo toomine ID järgi
const getById = (id) => {
  const todo = todos.find((t) => t.id === id);
  return todo;
};

// Todos-de toomine vastavalt done olekule
const getByDoneStatus = (done) => todos.filter((todo) => todo.done === done);

// Uue todo loomine
const create = (newTodo) => {
  newTodo.id = todos.length + 1; // Automaatne ID määramine
  todos.push(newTodo);
  return newTodo;
};

module.exports = {
  getAll,
  getById,
  getByDoneStatus,
  create,
};
