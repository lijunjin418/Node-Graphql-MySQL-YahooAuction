'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserRole = sequelize.define('UserRole', {
    userId: {
      type: DataTypes.INTEGER,            
    },
    roleId: {
      type: DataTypes.INTEGER,      
    }
  }, {
    timestamps: false,
    tableName: 'user_roles'
  });
  UserRole.associate = function(models) {
    // associations can be defined here
  };
  return UserRole;
};