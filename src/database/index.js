//Faz a conexão com o DB

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);


const User = require('../models/User');
const Car = require('../models/Car');


User.init(connection);
Car.init(connection);

module.exports = connection;