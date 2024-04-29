const express = require('express');
const users = require('./users');
const todoService = require('./todoService');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello world!',
    });
});

app.get('/todos', (req, res) => {
    const todos = todoService.getTodos();
    return res.status(200).json({
        success: true,
        todos,
    });
});

app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id);

    const todo = todoService.getTodoById(id);

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: 'Not found',
        });
    }

    return res.status(200).json({
        success: true,
        todo,
    });
});

app.get('/users', (req, res) => {
    return res.status(200).json({
        success: true,
        users,
    });
});

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);

    let user = null;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].id === id) {
            user = users[i];
            break;
        }
    }

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
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});