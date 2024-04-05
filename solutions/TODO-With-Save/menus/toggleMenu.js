const messages = require('../messages');
const prompt = require('prompt-sync');
const todoService = require('../todoService');

const pr = prompt();

function toggleMenu() {
  const id = pr(messages.insertId);
  if (!id) {
    console.log(messages.idRequired);
    return;
  }
  if (!Number(id)) {
    console.log(messages.idNumber);
    return;
  }
  const result = todoService.toggleTodo(Number(id));
  if (result) {
    console.log(messages.successToggle);
  } else {
    console.log(messages.notFound);
  }
}

module.exports = toggleMenu;