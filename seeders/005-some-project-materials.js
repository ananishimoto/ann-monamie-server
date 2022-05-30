"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "projectMaterials",
      [
        {
          id: 1,
          materialId: 1,
          projectId: 1,
          materialAmount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          materialId: 2,
          projectId: 2,
          materialAmount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("projectMaterials", null, {});
  },
};
