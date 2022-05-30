"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class projectMaterial extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      projectMaterial.belongsTo(models.project, { foreignKey: "projectId" });
      projectMaterial.belongsTo(models.material, { foreignKey: "materialId" });
    }
  }
  projectMaterial.init(
    {
      materialId: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
      materialAmount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "projectMaterial",
    }
  );
  return projectMaterial;
};
