'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ResetTokens extends Model {
    static associate(models) {
      this.belongsTo(models.Usuarios, {
        foreignKey: 'userId'
      })
    }
  };
  ResetTokens.init({
    Token: DataTypes.UUID,
    expirationDate: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'ResetTokens',
  });
  return ResetTokens;
};