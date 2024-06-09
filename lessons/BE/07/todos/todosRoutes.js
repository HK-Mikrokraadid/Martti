const express = require('express');
const todosController = require('./todosController');
const checkIfIdIsNumber = require('../general/middlewares/checkIfIdIsNumber');

const todosRouter = express.Router();

// TODO-dega seotud teekonnad
todosRouter.get('/', todosController.getAll);

// Kontrollime, kas id on number
todosRouter.get('/:id', checkIfIdIsNumber, todosController.getById);

todosRouter.post('/', todosController.create);

module.exports = todosRouter;
