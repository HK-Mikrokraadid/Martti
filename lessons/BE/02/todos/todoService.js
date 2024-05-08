// Teenuste funktsioonid, mis suhtlevad 'andmebaasiga' ja tagastavad vastavad andmed

const todos = require('./todos');

// Funktsioon, mis tagastab kõik tegevused
function getAll() {
  return todos;
}

// Funktsioon, mis tagastab tegevuse vastavalt id-le
function getById(id) {
  let todo = null;
  for (let i = 0; i < todos.length; i += 1) {
    if (todos[i].id === id) {
      todo = todos[i];
      break;
    }
  }
  return todo;
}

// Funktsioon, mis loob uue tegevuse vastavalt saadud andmetele
function create(newTodo) {
  // eslint-disable-next-line no-param-reassign
  newTodo.isDone = false;
  todos.push(newTodo); // Lisame uue tegevuse "andmebaasi"
  return true;
}

module.exports = { getAll, getById, create };
