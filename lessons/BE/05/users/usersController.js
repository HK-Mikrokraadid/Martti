const usersService = require('./usersService');
const hashService = require('../general/hashService');

const getAll = (req, res) => {
    const users = usersService.getAll();
    return res.status(200).json({
        success: true,
        message: 'List of users',
        users,
    });
};

const getById = (req, res) => {
    const id = Number(req.params.id);
    const user = usersService.getById(id);
    return res.status(200).json({
        success: true,
        message: 'User by id',
        user,
    });
};

const create = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const id = await usersService.create({
        firstName,
        lastName,
        email,
        password,
    });
    return res.status(201).json({
        success: true,
        message: 'User created',
        userId: id,
    });
};

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = usersService.getByEmail(email);
    if (!user) {
        return res.status(401).json({
            success: false,
            message: 'Wrong e-mail or password',
        });
    }
    const match = await hashService.match(password, user.password);
    if (!match) {
        return res.status(401).json({
            success: false,
            message: 'Wrong e-mail or password',
        });
    }
    return res.status(200).json({
        success: true,
        message: 'Logged in',
    });
};

module.exports = { getAll, getById, create, login };