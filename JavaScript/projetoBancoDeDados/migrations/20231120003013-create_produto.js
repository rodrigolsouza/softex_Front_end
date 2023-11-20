'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      preco: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      descricao: {
        type:Sequelize.TEXT,
        allowNull: true
      },
      createdAt:{
        allowNull: false,
        TYPE:Sequelize.DATE
      },
      updatedAt:{
        allowNull: false,
        TYPE:Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize)=>{
    await queryInterface.dropTable('produtos');
  }
};


