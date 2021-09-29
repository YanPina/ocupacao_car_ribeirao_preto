const Car = require('../models/Car');

module.exports = {

    //Retorna todas as Biomassas
    async index(req, res) {
        const cars = await Car.findAll();
        return res.json(cars);
    },
};