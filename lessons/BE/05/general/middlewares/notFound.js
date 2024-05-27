const notFound = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `Not found`,
        resources: {
            'ping': '/ping',
            'All cars': 'GET /cars',
            'Car by ID': 'GET /cars/:id',
            'Create car': 'POST /cars',
        },
    });
};

module.exports = notFound;
