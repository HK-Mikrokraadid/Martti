const jwtService = require('../services/jwtService');

const isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Token is not provided',
        });
    }
    const payload = jwtService.verify(token);
    if (!payload) {
        return res.status(401).json({
            success: false,
            message: 'Token is not valid',
        });
    }
    res.locals = payload;
    return next();
};

module.exports = isLoggedIn;
