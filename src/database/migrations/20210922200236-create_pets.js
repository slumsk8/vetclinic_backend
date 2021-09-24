'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pets', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name:{
        type: Sequelize.STRING,        
        allowNull: false,
      },
      birth:{
        type: Sequelize.STRING,
        allowNull: false
      },
      id_tutor:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'tutors',
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
   await queryInterface.dropTable('pets');
  }
};