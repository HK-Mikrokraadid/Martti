const todoService = require('./todoService');
const showLine = require('./menus/showLine');

function showList() {
  const todoList = todoService.getTodos();
  console.log('TODO nimekiri:'.bgBlue.yellow);
  showLine(69);
  console.log('| Indeks | Olek | Nimetus');
  showLine(69);

  for (let i = 0; i < todoList.length; i++) {
    const done = todoList[i].isDone ? '✔'.green : '✘'.red;
    console.log(`| ${i}  |  ${done}   | ${todoList[i].title}`);
  }
}

module.exports = showList;
