'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_directors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  content_directors.init({
    director_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    updatedat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'content_directors',
  });
  return content_directors;
};