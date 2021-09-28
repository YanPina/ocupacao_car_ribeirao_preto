'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.createTable('produtividades', { 
       regiao: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       tch: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      abr: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      mai: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      jun: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      jul: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      ago: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      set: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      out: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      nov: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      dez: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
       created_at: {
         type:Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
        type:Sequelize.DATE,
        allowNull: false,
      },
      });
  },

  down: (queryInterface, Sequelize) => {
  
    return queryInterface.dropTable('produtividades');
  }
};
