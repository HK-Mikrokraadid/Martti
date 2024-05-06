const statuses = require('./statuses');

function getAll() {
  return statuses;
}

function getById(id) {
  let status = null;
  for (let i = 0; i < statuses.length; i += 1) {
    if (statuses[i].id === id) {
      status = statuses[i];
      break;
    }
  }
  return status;
}

module.exports = { getAll, getById };
