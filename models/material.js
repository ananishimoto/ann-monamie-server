"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      material.belongsToMany(models.project, {
        through: "projectMaterial",
        foreignKey: "materialId",
      });
    }
  }
  material.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      length: DataTypes.INTEGER,
      material: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "material",
    }
  );
  return material;
};
