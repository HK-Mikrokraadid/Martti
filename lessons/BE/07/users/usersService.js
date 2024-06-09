/* eslint-disable no-param-reassign */
const users = require('./users');
const hashService = require('../general/services/hashService');

const getAll = () => users;

const getById = (id) => {
  const user = users.find((u) => u.id === id);
  return user;
};

const create = async (user) => {
  user.id = users.length + 1;
  user.role = 'user';
  user.password = await hashService.hashPassword(user.password);
  users.push(user);
  return user.id;
};

const getByEmail = (email) => {
  const user = users.find((u) => u.email === email);
  return user;
};

module.exports = {
  getAll, getById, create, getByEmail,
};
