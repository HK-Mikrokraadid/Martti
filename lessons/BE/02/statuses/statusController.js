const statusService = require('./statusService');

const getAll = (req, res) => {
  const statuses = statusService.getAll();
  return res.status(200).json({
    success: true,
    statuses,
  });
};

const getById = (req, res) => {
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
};

module.exports = { getAll, getById };
