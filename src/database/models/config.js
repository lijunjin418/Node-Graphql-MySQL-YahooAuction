'use strict';
module.exports = (sequelize, DataTypes) => {
  const Config = sequelize.define('Config', {
    item:  {
      type: DataTypes.STRING,
      unique: true,
      allowNull:false
    },
    val: DataTypes.STRING,    
  }, {});
  Config.associate = function(models) {
    // associations can be defined here
  };
  return Config;
};