'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userProjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      projectId: {
        type: Sequelize.INTEGER
      },
      timer: {
        type: Sequelize.TIME
      },
      status: {
        type: Sequelize.STRING
      },
      bookmarkedLine: {
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
    await queryInterface.dropTable('userProjects');
  }
};