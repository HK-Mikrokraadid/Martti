const roles = require('./roles');

function getAll() {
  return roles;
}

function getById(id) {
  let role = null;
  for (let i = 0; i < roles.length; i += 1) {
    if (roles[i].id === id) {
      role = roles[i];
      break;
    }
  }
  return role;
}

module.exports = { getAll, getById };
