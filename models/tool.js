"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tool.belongsToMany(models.project, {
        through: "projectTool",
        foreignKey: "toolId",
      });
    }
  }
  tool.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "tool",
    }
  );
  return tool;
};
