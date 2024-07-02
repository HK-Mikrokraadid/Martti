const express = require('express');
const usersController = require('./usersController');
const isLoggedIn = require('../general/middlewares/isLoggedIn');
const isAdmin = require('../general/middlewares/isAdmin');
const checkIfIdIsNumber = require('../general/middlewares/checkIfIdIsNumber');

const usersRouter = express.Router();

usersRouter.post('/login', usersController.login);
usersRouter.post('/', usersController.create);
usersRouter.use(isLoggedIn);
usersRouter.use(isAdmin);
usersRouter.get('/', usersController.getAll);
usersRouter.get('/:id', checkIfIdIsNumber, usersController.getById);

module.exports = usersRouter;
