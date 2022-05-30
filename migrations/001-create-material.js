"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("materials", {
      materialId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      color: {
        type: Sequelize.STRING,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      length: {
        type: Sequelize.INTEGER,
      },
      material: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("materials");
  },
};
