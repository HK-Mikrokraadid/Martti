const messages = require('../messages');
const prompt = require('prompt-sync');
const todoService = require('../todoService');

const pr = prompt();

function addMenu() {
  const title = pr('Sisesta TODO nimetus: ');
  if (!title) {
    console.log(messages.titleRequired.red);
    return;
  }
  const result = todoService.addTodo(title);
  if (result) {
    console.log(messages.successAdd);
  }
}

module.exports = addMenu;