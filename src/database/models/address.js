'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    userId: DataTypes.BIGINT,
    phone: DataTypes.STRING ,    
    RecvName: DataTypes.STRING ,    
    IdNumber:{
      type: DataTypes.STRING      
    },
    aCountry:{
      type: DataTypes.STRING      
    },    
    aProvince:{
      type: DataTypes.STRING      
    },    
    aCounty:{
      type: DataTypes.STRING      
    },    
    aCity:{
      type: DataTypes.STRING      
    },    
    aAddress:{
      type: DataTypes.STRING      
    },    
    postalCode: DataTypes.STRING,
    active: DataTypes.BOOLEAN, 
    mine: DataTypes.BOOLEAN
     
  }, {});
  Address.associate = function(models) {
    // associations can be defined here
  };
  return Address;
};