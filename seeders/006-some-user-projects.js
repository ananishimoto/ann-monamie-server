"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "userProjects",
      [
        {
          id: 1,
          userId: 1,
          projectId: 1,
          timer: 10,
          projectStatus: "Finished",
          bookmarkedLine: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userId: 1,
          projectId: 2,
          timer: 20,
          projectStatus: "WIP",
          bookmarkedLine: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          userId: 1,
          projectId: 3,
          timer: 40,
          projectStatus: "Wishlist",
          bookmarkedLine: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("userProjects", null, {});
  },
};
