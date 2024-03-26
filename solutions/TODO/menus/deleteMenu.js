const messages = require('../messages');
const prompt = require('prompt-sync');
const todoService = require('../todoService');

const pr = prompt();

function deleteMenu() {
  const id = pr(messages.insertId);
  if (!id) {
    console.log(messages.idRequired.red);
    return;
  }
  if (!Number(id)) {
    console.log(messages.idNumber);
    return;
  }
  const result = todoService.deleteTodo(Number(id));
  if (result) {
    console.log(messages.successDelete);
  } else {
    console.log(messages.notFound);
  }
}

module.exports = deleteMenu;
