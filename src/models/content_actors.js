'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_actors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  content_actors.init({
    actor_id: DataTypes.INTEGER,
    content_id: DataTypes.INTEGER,
    updatedat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'content_actors',
  });
  return content_actors;
};