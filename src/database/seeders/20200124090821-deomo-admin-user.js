'use strict';
const { hash } =require('bcryptjs');
module.exports = {
  up: async (queryInterface, Sequelize) => {
        
   const hashedPassword = await hash('123456', 12);   
   return queryInterface.bulkInsert('UserAdmins', [
     {
      name: 'admin',
      email: 'admin@qq.com', 
      password: hashedPassword
    },
     {
      name: 'editor',
      email: 'editor@qq.com', 
      password: hashedPassword
    }
     
  ], 
  {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('UserAdmins', null, {});
    
  }
};

