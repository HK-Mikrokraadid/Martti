const express = require('express');
const categoryService = require('./categories/categoryService');
const statusService = require('./statuses/statusService');
const roleService = require('./roles/roleService');
const todoController = require('./todos/todoController');
const userController = require('./users/userController');
const roles = require('./roles/roles');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => res.status(200).json({
  success: true,
  message: 'API is running',
  enpoints: {
    todos: {
      comment: 'Todos endpoints',
      getAll: '/todos',
      getById: '/todos/:id',
    },
    users: {
      comment: 'Users endpoints',
      getAll: '/users',
      getById: '/users/:id',
    },
    statuses: {
      comment: 'Statuses endpoints',
      getAll: '/statuses',
      getById: '/statuses/:id',
    },
    categories: {
      comment: 'Categories endpoints',
      getAll: '/categories',
      getById: '/categories/:id',
    },
    roles: {
      comment: 'Roles endpoints',
      getAll: '/roles',
      getById: '/roles/:id',
    },
  },
}));

// Tegevustega seotud endpoindid
app.get('/todos', todoController.getAll);
app.get('/todos/:id', todoController.getById);
app.post('/todos', todoController.create);

// Kasutajatega seotud endpoindid
app.get('/users', userController.getAll);
app.get('/users/:id', userController.getById);

app.get('/categories', (req, res) => {
  const categories = categoryService.getAll();
  return res.status(200).json({
    success: true,
    categories,
  });
});

app.get('/categories/:id', (req, res) => {
  const id = Number(req.params.id);

  const category = categoryService.getById(id);

  if (!category) {
    return res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }

  return res.status(200).json({
    success: true,
    category,
  });
});

app.get('/statuses', (req, res) => {
  const statuses = statusService.getAll();
  return res.status(200).json({
    success: true,
    statuses,
  });
});

app.get('/statuses/:id', (req, res) => {
  const id = Number(req.params.id);

  const status = statusService.getById(id);

  if (!status) {
    return res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }

  return res.status(200).json({
    success: true,
    status,
  });
});

app.get('/roles', (req, res) => {
  const roles = roleService.getAll();
  return res.status(200).json({
    success: true,
    roles,
  });
});

app.post('/roles', (req, res) => {
  const newRole = req.body;
  roles.push(newRole);
  res.status(200).json({
    success: true,
    message: 'Uus roll lisatud',
  });
});

app.get('/roles/:id', (req, res) => {
  const id = Number(req.params.id);

  const role = roleService.getById(id);

  if (!role) {
    return res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }

  return res.status(200).json({
    success: true,
    role,
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});
