'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        unique: true
      },
      CategoryName: {
        type: Sequelize.STRING
      },
      CategoryPath: {
        type: Sequelize.STRING
      },
      CategoryIdPath: {
        type: Sequelize.STRING
      },
      NumOfAuction: {
        type: Sequelize.INTEGER
      },
      ParentCategoryId: {
        type: Sequelize.INTEGER
      },
      IsLeaf: {
        type: Sequelize.BOOLEAN
      },
      Depth: {
        type: Sequelize.INTEGER
      },
      Order: {
        type: Sequelize.INTEGER
      },
      IsLink: {
        type: Sequelize.BOOLEAN
      },
      IsLeafToLink: {
        type: Sequelize.BOOLEAN
      },
      ChildCategory: {
        type: Sequelize.JSON
      },
      CategoryNameCn: {
        type: Sequelize.STRING
      },
      CategoryPathCn: {
        type: Sequelize.STRING
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Categories');
  }
};