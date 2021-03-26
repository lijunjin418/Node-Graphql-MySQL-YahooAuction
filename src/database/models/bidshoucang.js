'use strict';
module.exports = (sequelize, DataTypes) => {
  const BidShoucang = sequelize.define('BidShoucang', {
    userId: DataTypes.BIGINT,
    AuctionID: DataTypes.STRING,
  }, {
    updatedAt:false
  });
  BidShoucang.associate = function(models) {
    // associations can be defined here
    BidShoucang.belongsTo(models.YahooGood, {
      foreignKey: 'AuctionID',      
    })
  };
  return BidShoucang;
};