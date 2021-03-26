'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Wons', {
      AuctionID: {
        allowNull: false,       
        primaryKey: true,
        type: Sequelize.STRING
      },
      Title: Sequelize.STRING,
      WonPrice: Sequelize.BIGINT,
      Bids: {
        type: Sequelize.INTEGER
      },
      Seller: {
        type: Sequelize.JSON
      },
      Message: {
        type: Sequelize.JSON
      },
      Progresses: {
        type: Sequelize.JSON
      },
      exitTime: {
        type: Sequelize.BIGINT
      },
      AuctionItemUrl: {
        type: Sequelize.STRING
      },
      ImageUrl: {
        type: Sequelize.STRING
      },
      ContactUrl: {
        type: Sequelize.STRING
      },
      YahooAccountId: {
        type: Sequelize.STRING
      },    
      userId:{
        type: Sequelize.BIGINT
      },
      st_a_1pay_req:{
        type: Sequelize.DATE,
        comment: "1"
      },
      st_u_1paid_val:{
        type: Sequelize.BIGINT,
        comment: "2"
      },
      st_u_1paidAt:{
        type: Sequelize.DATE
      },    
      st_a_1paid_y:{
        type: Sequelize.DATE,
        comment: "3"
      },
      st_a_store_jp:{
        type: Sequelize.DATE,
        comment: "4"
      },
      st_a_ship_type_req:{
        type: Sequelize.DATE,
        comment: "5"
      },
      st_u_ship_type:{
        type: Sequelize.STRING,
        comment: "6"
      },
      st_a_ship_type_y:{
        type: Sequelize.DATE,
        comment: "7"
      },
      st_a_store_cn:{
        type: Sequelize.DATE,
        comment: "8"
        
      },
      st_a_2pay_req_v:{
        type: Sequelize.INTEGER,
        comment: "9"
      },
      st_a_2pay_reqAt:{
        type: Sequelize.DATE
      },
      st_u_2paid_val:{
        type: Sequelize.INTEGER,
        comment: "10"
      },
      st_u_2paidAt:{
        type: Sequelize.DATE
      },      
      st_u_re_name:{
        type: Sequelize.STRING,        
      },
      st_u_re_address:{
        type: Sequelize.STRING        
      },
      st_u_re_postalCode:{
        type: Sequelize.STRING        
      },
      st_u_re_phone:{
        type: Sequelize.STRING,        
      },
      st_a_ship_uuid:{
        type: Sequelize.STRING,   
        comment: "11"     
      },
      st_a_ship_type:{
        type: Sequelize.STRING,        
      },
      st_a_delivering:{
        type: Sequelize.STRING,   
        comment: "12"      
      },
      st_u_home_check:{
        type: Sequelize.STRING,   
        comment: "13"      
      },
      failed:{
        type: Sequelize.STRING,
        comment: "14" 
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
    return queryInterface.dropTable('Wons');
  }
};