require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const logger = require('./general/logger');
const notFound = require('./general/middlewares/notFound');
const todosRouter = require('./todos/todosRoutes');
const pingRouter = require('./general/pingRoutes');
const usersRouter = require('./users/usersRoutes');
const isLoggedIn = require('./general/middlewares/isLoggedIn');
const errorHandler = require('./general/middlewares/errorHandler');

const app = express();

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }));
}

// Middleware
app.use(express.json());

// Marsuutide (routes, endpoints) algus
// Ping teekonna registreerimine
app.use('/ping', pingRouter);

// Kasutajatega seotud teekondade registreerimine
app.use('/users', usersRouter);

// Registreerime isLoggedIn vahevara
app.use(isLoggedIn);

// Tegevustega seotud teekondade registreerimine
app.use('/todos', todosRouter);

// nn Lõpp-peatus
app.use('*', notFound);

// Veahalduse vahevara
app.use(errorHandler);

module.exports = app;
