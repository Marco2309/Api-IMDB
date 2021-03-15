"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("content_actors", {
      actor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "actors",
          key: "actor_id",
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
    await queryInterface.dropTable("content_actors");
  },
};
