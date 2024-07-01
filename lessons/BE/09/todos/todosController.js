const todosService = require('./todosService');

const getAll = async (req, res, next) => {
  try {
    const todos = await todosService.getAll();
    return res.status(200).json({
      success: true,
      message: 'List of all todos',
      todos,
    });
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    // throw new Error('Something something');
    const todo = await todosService.getById(id);
    if (!todo) {
      const error = new Error(`Todo with id: ${id} does not exist`);
      error.code = 404;
      throw error;
    }
    return res.status(200).json({
      success: true,
      message: `Todo with id: ${id}`,
      todo,
    });
  } catch (error) {
    return next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const {
      title, description,
    } = req.body;
    if (!title) {
      const error = new Error('Title is required');
      error.code = 400;
      throw error;
    }
    const newTodo = {
      user_id: res.locals.id,
      title,
      description,
    };
    const id = await todosService.create(newTodo);
    if (!id) {
      // Server errori puhul ei pea me koodi ja teadet lisama,
      // kuna need on errorHandleris juba olemas
      throw new Error();
    }
    return res.status(201).json({
      success: true,
      message: 'New todo is created',
      id,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const todo = await todosService.getById(id);
    if (!todo) {
      const error = new Error(`Todo with id: ${id} does not exist`);
      error.code = 404;
      throw error;
    }
    if (todo.user_id !== res.locals.id) {
      const error = new Error('You are not authorized to do this operation');
      error.code = 403;
      throw error;
    }
    const deleted = await todosService.deleteById(id);
    if (!deleted) {
      throw new Error();
    }
    return res.status(200).json({
      success: true,
      message: `Todo with id: ${id} deleted`,
    });
  } catch (error) {
    return next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const { title, description, isDone } = req.body;
    const todo = await todosService.getById(id);
    if (!todo) {
      const error = new Error(`Todo with id: ${id} does not exist`);
      error.code = 404;
      throw error;
    }
    if (todo.user_id !== res.locals.id) {
      const error = new Error('You are not authorized to do this operation');
      error.code = 403;
      throw error;
    }
    const todoToUpdate = {
      title: title || todo.title,
      description: description || todo.description,
      is_done: isDone || todo.is_done,
    };
    const result = await todosService.update(id, todoToUpdate);
    if (!result) {
      throw new Error();
    }
    return res.status(200).json({
      success: true,
      message: `Todo with id: ${id} updated`,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll, getById, create, deleteById, update,
};
