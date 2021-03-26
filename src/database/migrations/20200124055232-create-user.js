'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING,
        unique:true
      },
      email: {
        type: Sequelize.STRING,
        unique:true,        
      },
      password: {
        type: Sequelize.STRING        
      },
      sex:{
        type: Sequelize.BOOLEAN,
        defaultValue: true    
      },
      phone:{
        type: Sequelize.STRING,
        unique: true,
      },
      birth:{
        type: Sequelize.DATEONLY,      
      },
      IdNumber:{
        type: Sequelize.STRING,
        unique: true,
      },
      aCountry:{
        type: Sequelize.STRING,
        defaultValue: "US"     
      },    
      aProvince:{
        type: Sequelize.STRING      
      },    
      aCounty:{
        type: Sequelize.STRING      
      },    
      aCity:{
        type: Sequelize.STRING      
      },    
      aAddress:{
        type: Sequelize.STRING      
      },    
      postalCode:{
        type: Sequelize.STRING      
      },
      verified:{
        type:Sequelize.BOOLEAN,
        defaultValue: true
      },
      active:{
        type:Sequelize.BOOLEAN,
        defaultValue: true
      },      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      deletedAt: {        
        type: Sequelize.DATE,
        defaultValue: null
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};