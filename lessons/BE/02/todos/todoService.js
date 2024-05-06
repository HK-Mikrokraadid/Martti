const todos = require('./todos');

function getAll() {
  return todos;
}

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

/* {
  "title": "Esimene tegevus läbi POST päringu",
  "content": "POST päringu saatmise testimine",
  isDone: false
}
 */
function create(newTodo) {
  newTodo.isDone = false;
  todos.push(newTodo); // Lisame uue tegevuse "andmebaasi"
  return true;
}

module.exports = { getAll, getById, create };
