"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "projects",
      [
        {
          name: "Kiki whale",
          image:
            "https://i.etsystatic.com/18995061/r/il/dfaab8/3073672790/il_794xN.3073672790_nodo.jpg",
          pattern: "A lot of text here",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tunisian bag",
          image:
            "https://images.squarespace-cdn.com/content/v1/5d29420ad44ef300017f39ac/1568212500630-H39IEZK7WTH53FPEYSPV/20190904_184402.jpg?format=1500w",
          pattern: "A bunch of more text here",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Duck Friends",
          image:
            "https://i.etsystatic.com/10279552/r/il/2d37bd/2263634754/il_570xN.2263634754_98yf.jpg",
          pattern: "This should be the pattern",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("projects", null, {});
  },
};
