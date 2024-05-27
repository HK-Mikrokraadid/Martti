const express = require('express');
const usersController = require('./usersController');

const usersRouter = express.Router();

usersRouter.post('/login', usersController.login);
usersRouter.get('/', usersController.getAll);
usersRouter.get('/:id', usersController.getById);
usersRouter.post('/', usersController.create);

module.exports = usersRouter;
