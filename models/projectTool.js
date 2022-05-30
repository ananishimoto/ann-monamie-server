"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class projectTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      projectTool.belongsTo(models.project, { foreignKey: "projectId" });
      projectTool.belongsTo(models.tool, { foreignKey: "toolId" });
    }
  }
  projectTool.init(
    {
      toolId: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
      toolAmount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "projectTool",
    }
  );
  return projectTool;
};
