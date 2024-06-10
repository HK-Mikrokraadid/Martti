const todosService = require('./todosService');

const getAll = async (req, res) => {
  const todos = await todosService.getAll();
  return res.status(200).json({
    success: true,
    message: 'List of all todos',
    todos,
  });
};

const getById = async (req, res) => {
  const id = Number(req.params.id);

  const todo = await todosService.getById(id);
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

const create = async (req, res) => {
  const {
    title, description,
  } = req.body;
  if (!title) {
    return res.status(400).json({
      success: false,
      message: 'Title is required',
    });
  }
  const newTodo = {
    user_id: res.locals.id,
    title,
    description,
  };
  const id = await todosService.create(newTodo);
  if (!id) {
    return res.status(500).json({
      success: false,
      message: 'Something happened while creating new todo',
    });
  }
  return res.status(201).json({
    success: true,
    message: 'New todo is created',
    id,
  });
};

const deleteById = async (req, res) => {
  const id = Number(req.params.id);
  const todo = await todosService.getById(id);
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: `Todo with id: ${id} does not exist`,
    });
  }
  if (todo.user_id !== res.locals.id) {
    return res.status(403).json({
      success: false,
      message: 'You are not authorized to do this operation'
    });
  }
  const deleted = await todosService.deleteById(id);
  if (!deleted) {
    return res.status(500).json({
      success: false,
      message: 'Something happened in server side',
    });
  }
  return res.status(200).json({
    success: true,
    message: `Todo with id: ${id} deleted`,
  });
};

const update = async (req, res) => {
  const id = Number(req.params.id);
  const { title, description, isDone } = req.body;
  const todo = await todosService.getById(id);
  if (!todo) {
    return res.status(404).json({
      success: false,
      message: `Todo with id: ${id} does not exist`,
    });
  }
  if (todo.user_id !== res.locals.id) {
    return res.status(403).json({
      success: false,
      message: 'You are not authorized to do this operation'
    });
  }
  const todoToUpdate = {
    title: title || todo.title,
    description: description || todo.description,
    is_done: isDone || todo.is_done,
  };
  const result = await todosService.update(id, todoToUpdate);
  if (!result) {
    return res.status(500).json({
      success: false,
      message: 'Something happened in server side',
    });
  }
  return res.status(200).json({
    success: true,
    message: `Todo with id: ${id} updated`,
  });
};

module.exports = { getAll, getById, create, deleteById, update };
