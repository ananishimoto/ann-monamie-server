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
          pattern: `
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        `,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tunisian bag",
          image:
            "https://images.squarespace-cdn.com/content/v1/5d29420ad44ef300017f39ac/1568212500630-H39IEZK7WTH53FPEYSPV/20190904_184402.jpg?format=1500w",
          pattern:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Duck Friends",
          image:
            "https://i.etsystatic.com/10279552/r/il/2d37bd/2263634754/il_570xN.2263634754_98yf.jpg",
          pattern:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Blanket",
          image:
            "https://www.yarnspirations.com/dw/image/v2/BBZD_PRD/on/demandware.static/-/Sites-master-catalog-spinrite/default/dw00cb5f82/images/hi-res/BRC0502-000987M-2.jpg?sw=626&sh=626&sm=fit",
          pattern:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Greno, the Dino",
          image:
            "https://www.yarnspirations.com/dw/image/v2/BBZD_PRD/on/demandware.static/-/Sites-master-catalog-spinrite/default/dwb9ad8c45/images/hi-res/RHC0534-029042M.jpg?sw=2000&sh=2000&sm=fit",
          pattern:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pullover",
          image:
            "https://www.yarnspirations.com/dw/image/v2/BBZD_PRD/on/demandware.static/-/Sites-master-catalog-spinrite/default/dwff22eec4/images/hi-res/CAC0129-002449M.jpg?sw=626&sh=626&sm=fit",
          pattern:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Crochet Throw",
          image:
            "https://www.yarnspirations.com/dw/image/v2/BBZD_PRD/on/demandware.static/-/Sites-master-catalog-spinrite/default/dwb5605e01/images/hi-res/RHC0502-015873M.jpg?sw=626&sh=626&sm=fit",
          pattern:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cardigan",
          image:
            "https://www.yarnspirations.com/dw/image/v2/BBZD_PRD/on/demandware.static/-/Sites-master-catalog-spinrite/default/dw65f4023c/images/hi-res/RHC0129-016177M.jpg?sw=626&sh=626&sm=fit",
          pattern:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
