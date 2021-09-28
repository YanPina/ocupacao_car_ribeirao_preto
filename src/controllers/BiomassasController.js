const Biomassas = require('../models/Biomassas');

module.exports = {

    //Retorna todas as Biomassas
    async index(req, res) {
        const biomassas = await Biomassas.findAll();
        return res.json(biomassas);
    },

    //Vai criar a biomassa
    async create(req, res) {
        const { regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago } = req.body;

        const biomassas = await Biomassas.create({ regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago });

        res.status(200).json(biomassas);
    },
    //Retorna apenas a biomassa que for referenciada por id
    async details(req, res) {
        const biomassas = await Biomassas.findOne({
            where: { 
                id: req.params.id
            }
        });
        return res.json(biomassas);
    },
    //Retorna apenas a biomassa que for referenciada pela região
    async regiao(req, res) {
        const biomassas = await Biomassas.findAll({
            where: {regiao: req.params.regiao}
        });
        return res.json(biomassas);
    },
    async update(req, res) {
        const { regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago } = req.body;

        const biomassas = await Biomassas.update(
            { regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago }, { 
                where: { 
                    id: req.params.id
                }
            });
            res.status(200).json(biomassas);
    },
    async delete(req, res) {
        const { regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago } = req.body;
        const biomassas = await Biomassas.destroy({
            where: { 
                id: req.params.id
            }
        });
        res.status(200).json(biomassas);
    }
};