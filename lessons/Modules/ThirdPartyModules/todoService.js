const todos = require("./todos");

function getTodos() {
  return todos;
}

function addTodo(title) {
  const todo = {
    id: todos.length + 1,
    title: title,
    isDone: false,
  };
  todos.push(todo);
  return true;
}

function toggleTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].isDone = !todos[i].isDone;
    }
  }
  return true;
}

module.exports = { getTodos, addTodo, toggleTodo };
