const express = require('express');
const carsController = require('./carsController');
const checkIfIdIsNumber = require('../general/middlewares/checkIfIdIsNumber');

const carsRouter = express.Router();

// Autodega seotud teekonnad
carsRouter.get('/', carsController.getAll);
// kas id on olemas
carsRouter.get('/:id', checkIfIdIsNumber, carsController.getById);
carsRouter.post('/', carsController.create);

module.exports = carsRouter;
