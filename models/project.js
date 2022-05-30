"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      project.belongsToMany(models.user, {
        through: "userProject",
        foreignKey: "projectId",
      });
      project.belongsToMany(models.tool, {
        through: "projectTool",
        foreignKey: "projectId",
      });
      project.belongsToMany(models.material, {
        through: "projectMaterial",
        foreignKey: "projectId",
      });
    }
  }
  project.init(
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      image: DataTypes.STRING,
      pattern: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "project",
    }
  );
  return project;
};
