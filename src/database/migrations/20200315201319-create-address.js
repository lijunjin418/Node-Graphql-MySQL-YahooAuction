'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      userId: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      RecvName:{
        allowNull: false,
        type: Sequelize.STRING,      
      },
      phone:{
        allowNull: false,
        type: Sequelize.STRING       
      },
      IdNumber:{
        type: Sequelize.STRING      
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
        allowNull: false,
        type: Sequelize.STRING      
      },    
      postalCode:{
        allowNull: false,
        type: Sequelize.STRING      
      },
      verified:{
        type:Sequelize.BOOLEAN,
        defaultValue: false
      },
      active:{
        type:Sequelize.BOOLEAN,
        defaultValue: true
      },
      mine:{
        type:Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Addresses');
  }
};