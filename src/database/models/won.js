'use strict';
module.exports = (sequelize, DataTypes) => {
  const Won = sequelize.define('Won', {
    AuctionID: {
      allowNull: false,        
      primaryKey: true,
      type: DataTypes.STRING
    },  
    Title: DataTypes.STRING,
    WonPrice: DataTypes.INTEGER,
    Bids: {
      type: DataTypes.INTEGER
    },
    Seller: {
      type: DataTypes.JSON
    },
    Message: {
      type: DataTypes.JSON
    },
    Progresses: {
      type: DataTypes.JSON
    },
    exitTime: {
      type: DataTypes.BIGINT
    },
    AuctionItemUrl: {
      type: DataTypes.STRING
    },
    ImageUrl: {
      type: DataTypes.STRING
    },
    ContactUrl: {
      type: DataTypes.STRING
    },
    YahooAccountId: {
      type: DataTypes.STRING
    },    
    userId:{
      type: DataTypes.BIGINT
    },
    st_a_1pay_req:{
      type: DataTypes.DATE
    },
    st_u_1paid_val:{
      type: DataTypes.BIGINT
    },
    st_u_1paidAt:{
      type: DataTypes.DATE
    },    
    st_a_1paid_y:{
      type: DataTypes.DATE
    },
    st_a_store_jp:{
      type: DataTypes.DATE
    },
    st_a_ship_type_req:{
      type: DataTypes.DATE
    },
    st_u_ship_type:{
      type: DataTypes.STRING
    },
    st_a_ship_type_y:{
      type: DataTypes.DATE
    },
    st_a_store_cn:{
      type: DataTypes.DATE
    },   
    st_a_2pay_req_v:{
      type: DataTypes.INTEGER,
    },
    st_a_2pay_reqAt:{
      type: DataTypes.DATE
    },
    st_u_2paid_val:{
      type: DataTypes.INTEGER,
    },
    st_u_2paidAt:{
      type: DataTypes.DATE
    },      
    st_u_re_name:{
      type: DataTypes.STRING,        
    },
    st_u_re_address:{
      type: DataTypes.STRING        
    },
    st_u_re_postalCode:{
      type: DataTypes.STRING        
    },
    st_u_re_phone:{
      type: DataTypes.STRING,        
    },
    st_a_ship_uuid:{
      type: DataTypes.STRING,   
    },
    st_a_ship_type:{
      type: DataTypes.STRING,        
    },
    st_a_delivering:{
      type: DataTypes.STRING,   
    },
    st_u_home_check:{
      type: DataTypes.DATE,   
    }, 
    failed:{
      type: DataTypes.STRING
    },
  }, {});
  Won.associate = function(models) {
    // associations can be defined here
  };
  return Won;
};