/* eslint-disable no-console */
const todoService = require('./todoService');
const showLine = require('./menus/showLine');

function showList() {
  const todoList = todoService.getTodos();
  console.log('TODO nimekiri:'.bgBlue.yellow);
  showLine(69);
  console.log('| ID | Olek | Nimetus');
  showLine(69);
  // eslint-disable-next-line no-restricted-syntax
  for (const todo of todoList) {
    const done = todo.isDone ? '✔'.green : '✘'.red;
    console.log(`| ${todo.id}  |  ${done}   | ${todo.title}`);
  }
}

module.exports = showList;
