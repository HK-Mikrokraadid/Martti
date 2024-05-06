const users = require('./users');

function getAll() {
  return users;
}

function getById(id) {
  let user = null;
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].id === id) {
      user = users[i];
      break;
    }
  }
  return user;
}

module.exports = { getAll, getById };
