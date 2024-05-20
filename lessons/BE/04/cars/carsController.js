const carsService = require('./carsService');

const getAll = (req, res) => {
    const year = Number(req.query.year);
    if(year) {
        const cars = carsService.getByYear(year);
        return res.status(200).json({
            succes: true,
            message: 'List of cars by year',
            cars,
        });
    } 
    const cars = carsService.getAll();
    return res.status(200).json({
        succes: true,
        message: 'List of cars',
        cars,
    });
};

const getById = (req, res) => {
    const id = Number(req.params.id);
    // console.log(res.locals);
    // Järgmist osa ei ole enam vaja, kuna see on nüüd vahevara sees
/*     if (isNaN(id)) {
        return res.status(400).json({
            succes: false,
            message: 'Id must be a number',
        });
    } */
    const car = carsService.getById(id);
    if (!car) {
        return res.status(404).json({
            success: false,
            message: `Car with id: ${id} does not exists`,
        });
    }
    return res.status(200).json({
        success: true,
        message: `Car with id: ${id}`,
        car,
        info: res.locals.message,
    });
};

const create = (req, res) => {
    const { producer, model, year } = req.body;
    if (!producer || !model || !year) {
        return res.status(400).json({
            success: false,
            message: 'Producer, model or year is missing',
        });
    }
    const newCar = {
        producer,
        model,
        year,
    };
    const car = carsService.create(newCar);
    return res.status(201).json({
        success: true,
        message: 'New car is created',
        car,
    });
};

module.exports = { getAll, getById, create };
