'use strict';
module.exports = (sequelize, DataTypes) => {
  const HelpQA = sequelize.define('HelpQA', {
    q: DataTypes.STRING,
    a: DataTypes.TEXT,
    keyword: DataTypes.TEXT
  }, {});
  HelpQA.associate = function(models) {
    // associations can be defined here
  };
  return HelpQA;
};