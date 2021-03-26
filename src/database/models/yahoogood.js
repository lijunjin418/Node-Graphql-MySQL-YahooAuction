'use strict';
module.exports = (sequelize, DataTypes) => {
  const YahooGood = sequelize.define('YahooGood', {
    AuctionID: {
      allowNull: false,        
      primaryKey: true,
      type: DataTypes.STRING
    },  
    Title: DataTypes.STRING,
    Bids: {
      type: DataTypes.INTEGER
    },
    Seller: {
      type: DataTypes.STRING
    },
    img: {
      type: DataTypes.STRING
    },
    exitTime: {
      type: DataTypes.BIGINT
    },
  }, {
    updatedAt:false,
  });
  YahooGood.associate = function(models) {
    // associations can be defined here
    // YahooGood.belongsTo(models.BidShoucang, {
    //   foreignKey: 'AuctionID',
    // })
  };
  return YahooGood;
};