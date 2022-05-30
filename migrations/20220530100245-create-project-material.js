'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('projectMaterials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      materialId: {
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('projectMaterials');
  }
};