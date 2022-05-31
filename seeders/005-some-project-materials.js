"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "projectMaterials",
      [
        {
          materialId: 1,
          projectId: 1,
          materialAmount: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          materialId: 2,
          projectId: 2,
          materialAmount: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          materialId: 2,
          projectId: 3,
          materialAmount: 5,
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
