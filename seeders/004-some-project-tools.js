"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "projectTools",
      [
        {
          id: 1,
          toolId: 1,
          projectId: 1,
          toolAmount: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          toolId: 2,
          projectId: 2,
          toolAmount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("projectTools", null, {});
  },
};
