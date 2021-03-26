'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    name: DataTypes.STRING,    
  }, {timestamps: false});
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      through:'UserRole',
      as:'users',
      foreignKey:'roleId'
    })
  };
  return Role;
};