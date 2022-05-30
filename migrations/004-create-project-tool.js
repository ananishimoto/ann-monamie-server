"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("projectTools", {
      projectToolId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      toolId: {
        type: Sequelize.INTEGER,
        references: {
          model: "tools",
          key: "toolId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      projectId: {
        type: Sequelize.INTEGER,
        references: {
          model: "projects",
          key: "projectId",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      amount: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("projectTools");
  },
};
