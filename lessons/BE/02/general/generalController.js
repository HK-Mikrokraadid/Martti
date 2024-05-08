const endpointsList = (req, res) => res.status(200).json({
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
});

module.exports = { endpointsList };
