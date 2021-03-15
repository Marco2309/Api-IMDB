'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  contents.init({
    content_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    total_seasons: DataTypes.INTEGER,
    imdb_score: DataTypes.FLOAT,
    release_dates: DataTypes.STRING,
    play_time: DataTypes.STRING,
    content_rating: DataTypes.INTEGER,
    total_episodes: DataTypes.INTEGER,
    content_type: DataTypes.INTEGER,
    imdb_link: DataTypes.STRING,
    imdb_score_votes: DataTypes.INTEGER,
    rating_details: DataTypes.JSON,
    languages: DataTypes.STRING,
    updatedat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'contents',
  });
  return contents;
};