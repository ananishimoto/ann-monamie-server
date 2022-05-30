"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tools",
      [
        {
          toolId: 1,
          name: "Scissor",
          description: "golden bird version",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          toolId: 2,
          name: "Crochet Neddle 2.5mm",
          description: "Tulip red",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          toolId: 3,
          name: "Tunisian Neddle 8mm",
          description: "Bamboo needle",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tools", null, {});
  },
};
