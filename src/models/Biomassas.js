const { Model, DataTypes } = require('sequelize');

class Biomassas extends Model {
    static init(sequelize) {
        super.init({
            regiao: DataTypes.STRING,
            safra: DataTypes.STRING,
            set: DataTypes.FLOAT,
            out: DataTypes.FLOAT,
            nov: DataTypes.FLOAT,
            dez: DataTypes.FLOAT,
            jan: DataTypes.FLOAT,
            fev: DataTypes.FLOAT,
            mar: DataTypes.FLOAT,
            abr: DataTypes.FLOAT,
            mai: DataTypes.FLOAT,
            jun: DataTypes.FLOAT,
            jul: DataTypes.FLOAT,
            ago: DataTypes.FLOAT
        }, {
            sequelize
        })
    }
}

module.exports = Biomassas;

