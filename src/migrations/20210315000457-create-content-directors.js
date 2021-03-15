"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("content_directors", {
      director_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "directors",
          key: "director_id",
        },
      },
      content_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "contents",
          key: "content_id",
        },
      },
      updatedat: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("content_directors");
  },
};
