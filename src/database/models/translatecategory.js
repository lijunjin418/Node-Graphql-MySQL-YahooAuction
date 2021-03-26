'use strict';
module.exports = (sequelize, DataTypes) => {
  const TranslateCategory = sequelize.define('TranslateCategory', {
    CategoryId: DataTypes.INTEGER,
    OriginName: DataTypes.STRING,
    Cn: DataTypes.STRING
  }, {});
  TranslateCategory.associate = function(models) {
    // associations can be defined here
  };
  return TranslateCategory;
};