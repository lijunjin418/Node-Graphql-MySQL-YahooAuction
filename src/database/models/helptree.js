'use strict';
module.exports = (sequelize, DataTypes) => {
  const HelpTree = sequelize.define('HelpTree', {
    name: DataTypes.STRING,
    pid: DataTypes.INTEGER,
    orders: DataTypes.INTEGER,
  }, {});
  HelpTree.associate = function(models) {
    // associations can be defined here
  };
  return HelpTree;
};