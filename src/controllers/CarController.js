const Car = require('../models/Car');

module.exports = {

    //Retorna todas os Car
    async index(req, res) {
        const cars = await Car.findAll();
        return res.json(cars);
    },
    async create(req, res) {
        const { sigla_uf, nm_mun, car, area_km2, percentual } = req.body;

        const cars = await Car.create({ sigla_uf, nm_mun, car, area_km2, percentual });

        res.status(200).json(cars);
    },
    //Retorna apenas o Car que for referenciado por id
    async details(req, res) {
        const cars = await Car.findOne({
            where: { 
                id: req.params.id
            }
        });
        return res.json(cars);
    },
    async update(req, res) {
        const { sigla_uf, nm_mun, car, area_km2, percentual } = req.body;

        const cars = await Car.update(
            { sigla_uf, nm_mun, car, area_km2, percentual }, { 
                where: { 
                    id: req.params.id
                }
            });
            res.status(200).json(cars);
    },
    async delete(req, res) {
        const { sigla_uf, nm_mun, car, area_km2, percentual } = req.body;
        const cars = await Car.destroy({
            where: { 
                id: req.params.id
            }
        });
        res.status(200).json(cars);
    }
};