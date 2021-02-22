"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    static associate(models) {
      this.belongsToMany(models.UserRoles, {
        through: "UserRoles",
        foreignKey: "roleId",
      });
    }
  }
  Roles.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};
