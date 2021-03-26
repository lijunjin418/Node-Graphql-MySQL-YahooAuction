'use strict';
module.exports = (sequelize, DataTypes) => {
  const BidHistory = sequelize.define('BidHistory', {
    AuctionID: DataTypes.STRING,    
    YahooAccountId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,    
    won: DataTypes.BOOLEAN,
  }, {
    updatedAt:false
  });
  BidHistory.associate = function(models) {
    // associations can be defined here
    BidHistory.belongsTo(models.User, {
      foreignKey: 'userId'
    })

    BidHistory.belongsTo(models.YahooGood, {
      foreignKey: 'AuctionID',
    })
  };
  return BidHistory;
};