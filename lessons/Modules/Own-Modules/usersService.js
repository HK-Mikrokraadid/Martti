const users = require('./users');

function getUsers() {
  return users;
}

function getUserByFirstName(firstName) {
  let foundUser;
  for (let i = 0; i < users.length; i += 1) {
    if (users[i].firstName === firstName) {
      foundUser = users[i];
    }
  }
  return foundUser;
}

module.exports = { getUsers, getUserByFirstName };
