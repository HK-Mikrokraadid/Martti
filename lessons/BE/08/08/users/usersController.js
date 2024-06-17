const usersService = require('./usersService');
const hashService = require('../general/services/hashService');
const jwtService = require('../general/services/jwtService');

const getAll = async (req, res) => {
  const users = await usersService.getAll();
  return res.status(200).json({
    success: true,
    message: 'List of users',
    users,
  });
};

const getById = async (req, res) => {
  const id = Number(req.params.id);
  const user = await usersService.getById(id);
  return res.status(200).json({
    success: true,
    message: 'User by id',
    user,
  });
};

const create = async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const id = await usersService.create({
    firstName,
    lastName,
    email,
    password,
  });
  return res.status(201).json({
    success: true,
    message: 'User created',
    id,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await usersService.getByEmail(email);
  if (!user) {
    return res.status(401).json({
      success: false,
      message: 'Wrong e-mail or password',
    });
  }
  const match = await hashService.match(password, user.password);
  if (!match) {
    return res.status(401).json({
      success: false,
      message: 'Wrong e-mail or password',
    });
  }
  const token = jwtService.sign(user);
  return res.status(200).json({
    success: true,
    message: 'Logged in',
    token,
  });
};

module.exports = {
  getAll, getById, create, login,
};
