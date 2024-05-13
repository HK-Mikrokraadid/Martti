const express = require('express');
const carsController = require('./cars/carsController');
const ping = require('./general/pingController');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/ping', ping);

app.get('/cars', carsController.getAll);
app.get('/cars/:id', carsController.getById);
app.post('/cars', carsController.create);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/ping`);
});