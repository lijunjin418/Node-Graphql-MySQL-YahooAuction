'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccountYahoo = sequelize.define('AccountYahoo', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    cookie: DataTypes.TEXT,
    token: DataTypes.TEXT,
    active: DataTypes.TINYINT,
    status: DataTypes.INTEGER
  }, {});
  AccountYahoo.associate = function(models) {
    // associations can be defined here
  };
  return AccountYahoo;
};