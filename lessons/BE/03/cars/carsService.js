const cars = require('./cars');

const getAll = () => {
    return cars;
};

const getById = (id) => {
    let car = null;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === id) {
            car = cars[i];
            break;
        }
    }
    return car;
};

const getByYear = (year) => {
    const carsByYear = cars.filter((car) => {
        return car.year >= year;
    });
    return carsByYear;
};

const create = (newCar) => {
    newCar.id = cars.length + 1;
    cars.push(newCar);
    return newCar;
};

module.exports = { getAll, getById, create, getByYear };
