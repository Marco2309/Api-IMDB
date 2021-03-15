'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class directors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  directors.init({
    director_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    updatedat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'directors',
  });
  return directors;
};