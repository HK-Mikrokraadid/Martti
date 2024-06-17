/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
const db = require('../db');
const hashService = require('../general/services/hashService');

const getAll = async () => {
  try {
    const [users] = await db.query('SELECT id, firstName, lastName, email FROM users');
    return users;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getById = async (id) => {
  try {
    const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
    return user[0];
  } catch (error) {
    console.log(error);
    return false;
  }
};

const create = async (user) => {
  try {
    const hashedPassword = await hashService.hashPassword(user.password);
    const newUser = { ...user, password: hashedPassword };
    const result = await db.query('INSERT INTO users SET ?', newUser);
    return result.insertId;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const getByEmail = async (email) => {
  try {
    const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    return user[0];
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  getAll, getById, create, getByEmail,
};
