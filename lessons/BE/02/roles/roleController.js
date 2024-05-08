const roleService = require('./roleService');

const getAll = (req, res) => {
  const roles = roleService.getAll();
  return res.status(200).json({
    success: true,
    roles,
  });
};

const getById = (req, res) => {
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
};

const create = (req, res) => {
  const newRole = req.body;
  roleService.create(newRole);

  return res.status(200).json({
    success: true,
    message: 'Vastus post meetodile',
  });
};

module.exports = { getAll, getById, create };
