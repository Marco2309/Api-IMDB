'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class episode_list extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  episode_list.init({
    episode_id: DataTypes.INTEGER,
    season_num: DataTypes.INTEGER,
    episode_name: DataTypes.STRING,
    content_id: DataTypes.INTEGER,
    release_date: DataTypes.STRING,
    episode_rating: DataTypes.INTEGER,
    episode_num: DataTypes.INTEGER,
    description: DataTypes.STRING,
    episode_imdb_link: DataTypes.STRING,
    episode_score_votes: DataTypes.INTEGER,
    updatedat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'episode_list',
  });
  return episode_list;
};