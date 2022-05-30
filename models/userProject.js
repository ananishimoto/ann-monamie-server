"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userProject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userProject.belongsTo(models.user, { foreignKey: "userId" });
      userProject.belongsTo(models.project, { foreignKey: "projectId" });
    }
  }
  userProject.init(
    {
      userId: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
      timer: DataTypes.TIME,
      projectStatus: DataTypes.STRING,
      bookmarkedLine: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "userProject",
    }
  );
  return userProject;
};
