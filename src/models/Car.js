const { Model, DataTypes } = require('sequelize');

class Car extends Model {
    static init(sequelize) {
        super.init({
            sigla_uf: DataTypes.STRING,
            nm_mun: DataTypes.STRING,
            car: DataTypes.STRING,
            area_km2: DataTypes.FLOAT,
            percentual: DataTypes.FLOAT,
        }, {
            sequelize
        })
    }
}

module.exports = Car;