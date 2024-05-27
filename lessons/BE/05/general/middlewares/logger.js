// Logimise vahevara (middleware)
const logger = (req, res, next) => {
    console.log(req.url);
    return next();
};

module.exports = logger;
