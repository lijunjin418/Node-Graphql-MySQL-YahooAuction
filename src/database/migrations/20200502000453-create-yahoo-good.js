'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('YahooGoods', {
      AuctionID: {
        allowNull: false,       
        primaryKey: true,
        type: Sequelize.STRING
      },      
      Title: {
        type: Sequelize.STRING
      },
      img: {
        type: Sequelize.STRING
      },
      exitTime: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
      Bids: {
        type: Sequelize.INTEGER
      },
      Seller: {
        type: Sequelize.STRING
      },  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },    
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('YahooGoods');
  }
};