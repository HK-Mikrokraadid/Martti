/* eslint-disable no-console */
const prompt = require('prompt-sync');
const messages = require('../messages');
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
