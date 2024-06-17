// eslint-disable-next-line no-unused-vars
const notFound = (req, res, next) => res.status(404).json({
  success: false,
  message: 'Not found',
  resources: {
    ping: 'GET /ping',
    todos: {
      'All todos': 'GET /todos',
      'Todo by id': 'GET /todos/:id',
      'Create todo': 'POST /todos',
      'Update todo': 'PATCH /todos/:id',
      'Delete todo': 'DELETE /todos/:id',
    },
    users: {
      'All users': 'GET /users',
      'User by id': 'GET /users/:id',
      'Create user': 'POST /users',
      'Update user': 'PATCH /users/:id',
      'Delete user': 'DELETE /users/:id',
    },
  },
});

module.exports = notFound;
