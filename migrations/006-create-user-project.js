"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("userProjects", {
      userProjectId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "userId",
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
      timer: {
        type: Sequelize.TIME,
      },
      status: {
        type: Sequelize.STRING,
      },
      bookmarkedLine: {
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
    await queryInterface.dropTable("userProjects");
  },
};
