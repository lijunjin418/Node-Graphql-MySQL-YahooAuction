'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    CategoryId: DataTypes.INTEGER,
    CategoryName: DataTypes.STRING,
    CategoryPath: DataTypes.STRING,
    CategoryIdPath: DataTypes.STRING,
    NumOfAuction: DataTypes.INTEGER,
    ParentCategoryId: DataTypes.INTEGER,
    IsLeaf: DataTypes.BOOLEAN,
    Depth: DataTypes.INTEGER,
    Order: DataTypes.INTEGER,
    IsLink: DataTypes.BOOLEAN,
    IsLeafToLink: DataTypes.BOOLEAN,
    ChildCategory: DataTypes.JSON,
    CategoryNameCn: DataTypes.STRING,
    CategoryPathCn: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};