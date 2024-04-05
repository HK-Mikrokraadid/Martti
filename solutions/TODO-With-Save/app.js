// Easy TODO app with Node.js
const colors = require('colors');

// Importing messages
const messages = require('./messages');

// Importing menus
const mainMenu = require('./menus/mainMenu');
const addMenu = require('./menus/addMenu');
const toggleMenu = require('./menus/toggleMenu');
const deleteMenu = require('./menus/deleteMenu');

// Importing showList of todos
const showList = require('./showList');

while (true) {
  const choice = mainMenu();
  console.clear();

  if (choice === '1') { // Show list
    showList();
  } else if (choice === '2') { // Add
    addMenu();
  } else if (choice === '3') { // Toggle
    showList();
    toggleMenu();
    showList();
  } else if (choice === '4') { // Delete
    showList();
    deleteMenu();
    showList();
  } else if (choice === '5') { // Exit
    console.log(messages.ending);
    break;
  } else {
    console.log(messages.invalidChoice); // Invalid choice
  }
}
