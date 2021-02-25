"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserRoles extends Model {
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        foreignKey: "userId",
      });

      this.belongsTo(models.Roles, {
        foreignKey: "roleId",
      });
    }
  }
  UserRoles.init(
    {
      userId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "UserRoles",
    }
  );
  return UserRoles;
};
