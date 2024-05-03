const express = require('express');
const todoService = require('./todos/todoService');
const userService = require('./users/userService');
const categoryService = require('./categories/categoryService');
const statusService = require('./statuses/statusService');
const roleService = require('./roles/roleService');

const app = express();

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

app.get('/todos', (req, res) => {
  const todos = todoService.getAll();
  return res.status(200).json({
    success: true,
    todos,
  });
});

app.get('/todos/:id', (req, res) => {
  const id = Number(req.params.id);

  const todo = todoService.getById(id);

  if (!todo) {
    return res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }

  return res.status(200).json({
    success: true,
    todo,
  });
});

app.get('/users', (req, res) => {
  const users = userService.getAll();
  return res.status(200).json({
    success: true,
    users,
  });
});

app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);

  const user = userService.getById(id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'Not found',
    });
  }

  return res.status(200).json({
    success: true,
    user,
  });
});

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
