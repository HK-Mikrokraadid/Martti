const db = require('../db');
const hashService = require('../general/services/hashService');

const getAll = async () => {
  const [users] = await db.query('SELECT id, firstName, lastName, email FROM users');
  return users;
};

const getById = async (id) => {
  const [user] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return user[0];
};

const create = async (user) => {
  const hashedPassword = await hashService.hashPassword(user.password);
  const newUser = { ...user, password: hashedPassword };
  const result = await db.query('INSERT INTO users SET ?', newUser);
  return result.insertId;
};

const getByEmail = async (email) => {
  const [user] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  return user[0];
};

module.exports = {
  getAll, getById, create, getByEmail,
};
