'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      } 
      
    }).then(() => {
      return queryInterface.createTable('User_roles',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        roleId: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      });
    });
  },  
  down: (queryInterface, Sequelize) => {
    // return queryInterface.dropTable('Users').;
    return queryInterface.dropTable('Roles').then(() => {
      return queryInterface.dropTable('User_role');
    });
  }
};