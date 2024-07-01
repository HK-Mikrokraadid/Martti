/* eslint-disable no-param-reassign */
require('dotenv').config();
const logger = require('../logger');

// eslint-disable-next-line no-unused-vars
const errorHandler = (err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') {
    logger.error(err.message, { stack: err.stack });
  }
  // Juhul kui erroril ei ole koodi või kood on, kuid see ei ole number - näit ETIMEOUT
  if (!err.code || !Number(err.code)) {
    err.code = 500;
    err.message = 'Server error';
  }
  return res.status(err.code).json({
    success: false,
    message: err.message,
  });
};

module.exports = errorHandler;
