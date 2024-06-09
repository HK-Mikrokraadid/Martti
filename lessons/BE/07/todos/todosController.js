const todosService = require('./todosService');

const getAll = (req, res) => {
  const todos = todosService.getAll();
  return res.status(200).json({
    success: true,
    message: 'List of all todos',
    todos,
  });
};

const getById = (req, res) => {
  const id = Number(req.params.id);

  const todo = todosService.getById(id);
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: `Todo with id: ${id} does not exist`,
    });
  }
  return res.status(200).json({
    success: true,
    message: `Todo with id: ${id}`,
    todo,
  });
};

const create = (req, res) => {
  const {
    userId, title, description,
  } = req.body;
  if (!userId || !title) {
    return res.status(400).json({
      success: false,
      message: 'User ID and title are required',
    });
  }
  const newTodo = {
    userId,
    title,
    description,
  };
  const todo = todosService.create(newTodo);
  return res.status(201).json({
    success: true,
    message: 'New todo is created',
    todo,
  });
};

module.exports = { getAll, getById, create };
