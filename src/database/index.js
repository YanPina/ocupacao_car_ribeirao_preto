//Faz a conexão com o DB

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);


const User = require('../models/User');
const Biomassas = require('../models/Biomassas');
const Pluviometrias = require('../models/Pluviometrias');
const Produtividade = require('../models/Produtividade');

User.init(connection);
Biomassas.init(connection);
Pluviometrias.init(connection);
Produtividade.init(connection);

module.exports = connection;