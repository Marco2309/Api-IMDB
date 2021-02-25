"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ResetTokens extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        foreignKey: "userId",
      });
    }
  }
  ResetTokens.init(
    {
      token: DataTypes.UUID,
      expirationDate: DataTypes.DATE,
      userId: DataTypes.INTEGER,
      active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "ResetTokens",
    }
  );
  return ResetTokens;
};
