const { Model, DataTypes } = require('sequelize');

class Produtividade extends Model {
    static init(sequelize) {
        super.init({
            regiao: DataTypes.STRING,
            tch: DataTypes.STRING,
            abr: DataTypes.FLOAT,
            mai: DataTypes.FLOAT,
            jun: DataTypes.FLOAT,
            jul: DataTypes.FLOAT,
            ago: DataTypes.FLOAT,
            set: DataTypes.FLOAT,
            out: DataTypes.FLOAT,
            nov: DataTypes.FLOAT,
            dez: DataTypes.FLOAT
        }, {
            sequelize
        })
    }
}

module.exports = Produtividade;

