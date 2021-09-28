const Produtividade = require('../models/Produtividade');

module.exports = {

    //Retorna todas as Produtividade
    async index(req, res) {
        const produtividades = await Produtividade.findAll();
        return res.json(produtividades);
    },

    //Vai criar a produtividades
    async create(req, res) {
        const { regiao, tch, abr, mai, jun, jul, ago, set, out, nov, dez } = req.body;

        const produtividades = await Produtividade.create({ regiao, tch, abr, mai, jun, jul, ago, set, out, nov, dez });

        res.status(200).json(produtividades);
    },
    //Retorna apenas a produtividades que for referenciada por id
    async details(req, res) {
        const produtividades = await Produtividade.findOne({
            where: { 
                id: req.params.id
            }
        });
        return res.json(produtividades);
    },
    //Retorna apenas a produtividades que for referenciada pela região
    async regiao(req, res) {
        const produtividades = await Produtividade.findAll({
            where: {regiao: req.params.regiao}
        });
        return res.json(produtividades);
    },
    async update(req, res) {
        const { regiao, tch, abr, mai, jun, jul, ago, set, out, nov, dez } = req.body;

        const produtividades = await Produtividade.update(
            { regiao, tch, abr, mai, jun, jul, ago, set, out, nov, dez }, { 
                where: { 
                    id: req.params.id
                }
            });
            res.status(200).json(produtividades);
    },
    async delete(req, res) {
        const { regiao, tch, abr, mai, jun, jul, ago, set, out, nov, dez } = req.body;
        const produtividades = await Produtividade.destroy({
            where: { 
                id: req.params.id
            }
        });
        res.status(200).json(produtividades);
    }
};