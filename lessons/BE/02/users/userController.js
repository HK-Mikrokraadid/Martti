const userService = require('./userService');

const getAll = (req, res) => {
    const users = userService.getAll();
    return res.status(200).json({
      success: true,
      users,
    });
  }

const getById = (req, res) => {
    const id = Number(req.params.id);
  
    const user = userService.getById(id);
  
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Not found',
      });
    }
  
    return res.status(200).json({
      success: true,
      user,
    });
  }

module.exports = { getAll, getById };
