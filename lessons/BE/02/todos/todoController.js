const todoService = require('./todoService');

const getAll = (req, res) => {
    const todos = todoService.getAll();
    return res.status(200).json({
        success: true,
        todos,
    });
}

const getById = (req, res) => {
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
  }
const create = (req, res) => {
  const newTodo = req.body;
  todoService.create(newTodo);
  
  return res.status(200).json({
      success: true,
      message: 'Vastus post meetodile',
  });
}

module.exports = { getAll, getById, create };
