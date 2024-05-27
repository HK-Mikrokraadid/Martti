const isAdmin = (req, res, next) => {
    if (res.locals.role !== 'admin') {
        return res.status(403).json({
            success: false,
            message: 'You have to be admin to access this resource',
        });
    }
    return next();
};

module.exports = isAdmin;
