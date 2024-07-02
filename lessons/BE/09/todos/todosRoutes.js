const express = require('express');
const todosController = require('./todosController');
const checkIfIdIsNumber = require('../general/middlewares/checkIfIdIsNumber');

const todosRouter = express.Router();

todosRouter.get('/', todosController.getAll);
// Kontrollime, kas id on number
todosRouter.get('/:id', checkIfIdIsNumber, todosController.getById);
todosRouter.post('/', todosController.create);
todosRouter.delete('/:id', checkIfIdIsNumber, todosController.deleteById);
todosRouter.patch('/:id', checkIfIdIsNumber, todosController.update);

module.exports = todosRouter;
