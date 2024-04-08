const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const filePath = './todos.json';

const loadFile = function (file) {
  try {
    const data = fs.readFileSync(file);
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};

const saveFile = function (file, data) {
  try {
    fs.writeFileSync(file, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

const todos = loadFile(filePath);

function getTodos() {
  return todos;
}

function addTodo(title) {
  const todo = {
    id: uuidv4(),
    title,
    isDone: false,
  };
  todos.push(todo);
  saveFile(filePath, todos);
  return true;
}

function toggleTodo(index) {
  if (index < 0 || index >= todos.length) {
    return false;
  }
  todos[index].isDone = !todos[index].isDone;
  saveFile(filePath, todos);
  return true;
}

function deleteTodo(index) {
  if (index < 0 || index >= todos.length) {
    return false;
  }
  todos.splice(index, 1);
  saveFile(filePath, todos);
  return true;
}

module.exports = {
  getTodos, addTodo, toggleTodo, deleteTodo,
};
