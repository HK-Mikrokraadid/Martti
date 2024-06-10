const express = require('express');
const logger = require('./general/middlewares/logger');
const notFound = require('./general/middlewares/notFound');
const todosRouter = require('./todos/todosRoutes');
const pingRouter = require('./general/pingRoutes');
const usersRouter = require('./users/usersRoutes');
const isLoggedIn = require('./general/middlewares/isLoggedIn');

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Registreerime logger vahevara
app.use(logger);

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

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}/ping`);
});
