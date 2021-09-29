const Car = require('../models/Car');

module.exports = {

    //Retorna todas as Biomassas
    async index(req, res) {
        const car = await Car.findAll();
        return res.json(car);
    },
};