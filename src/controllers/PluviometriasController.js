const Pluviometrias = require('../models/Pluviometrias');

module.exports = {

    //Retorna todas as Biomassas
    async index(req, res) {
        const pluviometrias = await Pluviometrias.findAll();
        return res.json(pluviometrias);
    },
    //Vai criar a pluviometria
    async create(req, res) {
        const { regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago } = req.body;

        const pluviometrias = await Pluviometrias.create({ regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago });

        res.status(200).json(pluviometrias);
    },
    //Retorna apenas a pluviometria que for referenciada por id
    async details(req, res) {
        const pluviometrias = await Pluviometrias.findOne({
            where: { 
                id: req.params.id
            }
        });
        return res.json(pluviometrias);
    },
    //Retorna apenas a pluviometria que for referenciada pela região
    async regiao(req, res) {
        const pluviometrias = await Pluviometrias.findAll({
            where: {regiao: req.params.regiao}
        });
        return res.json(pluviometrias);
    },

    async update(req, res) {
        const { regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago } = req.body;

        const pluviometrias = await Pluviometrias.update(
            { regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago }, { 
                where: { 
                    id: req.params.id
                }
            });
            res.status(200).json(pluviometrias);
    },
    async delete(req, res) {
        const { regiao, safra, set, out, nov, dez, jan, fev, mar, abr, mai, jun, jul, ago } = req.body;
        const pluviometrias = await Pluviometrias.destroy({
            where: { 
                id: req.params.id
            }
        });
        res.status(200).json(pluviometrias);
    }
}