"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Ana",
          email: "ana@email.com",
          password: "a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alessandra",
          email: "alessandra@email.com",
          password: "ale",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bruna",
          email: "bruna@email.com",
          password: "b",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
