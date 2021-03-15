'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class content_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  content_types.init({
    content_type_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    updatedat: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'content_types',
  });
  return content_types;
};