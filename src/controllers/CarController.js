const Car = require('../models/Car');

module.exports = {

    //Retorna todas as Biomassas
    async index(req, res) {
        const cars = await Car.findAll();
        return res.json(cars);
    },
    async create(req, res) {
        const { sigla_uf, nm_mun, car, area_km2, percentual } = req.body;

        const cars = await Car.create({ sigla_uf, nm_mun, car, area_km2, percentual });

        res.status(200).json(cars);
    },
};