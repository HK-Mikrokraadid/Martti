const express = require('express');

// Kontrollerite importimine
const todoController = require('./todos/todoController');
const userController = require('./users/userController');
const roleController = require('./roles/roleController');
const categoryController = require('./categories/categoryController');
const statusController = require('./statuses/statusController');
const generalController = require('./general/generalController');

const app = express();

app.use(express.json());

const port = 3000;

// '/' endpoint, mis tagastab API endpointide nimekirja
app.get('/', generalController.endpointsList);

// Tegevustega seotud endpoindid - vastava endpunkti jaoks kasutame vastavat controllerit
app.get('/todos', todoController.getAll);
app.get('/todos/:id', todoController.getById);
app.post('/todos', todoController.create);

// Kasutajatega seotud endpoindid - vastava endpunkti jaoks kasutame vastavat controllerit
app.get('/users', userController.getAll);
app.get('/users/:id', userController.getById);

// Kategooriatega seotud endpoindid
app.get('/categories', categoryController.getAll);
app.get('/categories/:id', categoryController.getById);

// Staatustega seotud endpoindid
app.get('/statuses', statusController.getAll);
app.get('/statuses/:id', statusController.getById);

// Rollidega seotud endpoindid
app.get('/roles', roleController.getAll);
app.get('/roles/:id', roleController.getById);
app.post('/roles', roleController.create);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
