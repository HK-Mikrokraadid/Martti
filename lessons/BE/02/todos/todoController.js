const todoService = require('./todoService');

// Kontrolleri funktsioon, mis küsib tegevuste nimekirja vastavast teenusest
// ja tagastab selle vastusena
const getAll = (req, res) => {
  const todos = todoService.getAll();
  return res.status(200).json({
    success: true,
    todos,
  });
};

// Kontrolleri funktsioon, mis küsib tegevuse id alusel vastavast teenusest
// ja tagastab selle vastusena
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
};

// Kontrolleri funktsioon, mis loob uue tegevuse vastavalt saadud andmetele
// ja tagastab vastusena eduka teate
const create = (req, res) => {
  const newTodo = req.body;
  todoService.create(newTodo);

  return res.status(200).json({
    success: true,
    message: 'Vastus post meetodile',
  });
};

module.exports = { getAll, getById, create };
