"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("contents", {
      content_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      total_seasons: {
        type: Sequelize.INTEGER,
      },
      imdb_score: {
        type: Sequelize.FLOAT,
      },
      release_dates: {
        type: Sequelize.STRING,
      },
      play_time: {
        type: Sequelize.STRING,
      },
      content_rating: {
        type: Sequelize.INTEGER,
        references: {
          model: "content_ratings",
          key: "content_rating_id",
        },
      },
      total_episodes: {
        type: Sequelize.INTEGER,
      },
      content_type: {
        type: Sequelize.INTEGER,
        references: {
          model: "content_types",
          key: "content_type_id",
        },
      },
      imdb_link: {
        type: Sequelize.STRING,
      },
      imdb_score_votes: {
        type: Sequelize.INTEGER,
      },
      rating_details: {
        type: Sequelize.JSON,
      },
      languages: {
        type: Sequelize.STRING,
      },
      updatedat: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("contents");
  },
};
