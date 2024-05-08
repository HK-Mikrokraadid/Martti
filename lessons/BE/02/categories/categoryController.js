const categoryService = require('./categoryService');

const getAll = (req, res) => {
  const categories = categoryService.getAll();
  return res.status(200).json({
    success: true,
    categories,
  });
};

const getById = (req, res) => {
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
};

module.exports = { getAll, getById };
