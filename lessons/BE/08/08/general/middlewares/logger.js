// Logimise vahevara (middleware)
const logger = (req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(req.url);
  return next();
};

module.exports = logger;
