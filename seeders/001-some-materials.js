"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "materials",
      [
        {
          name: "Ricorumi Yarn",
          color: "pink",
          weight: 1,
          length: 1,
          material: "cotton",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Other Yarn",
          color: "blue",
          weight: 2,
          length: 2,
          material: "cotton and wool",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("materials", null, {});
  },
};
