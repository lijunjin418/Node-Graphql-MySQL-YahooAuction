'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    
    return queryInterface.bulkInsert('user_roles', [{
        userId: 1,
        roleId: 1
      },
      {
        userId: 2,
        roleId: 2
      },
      {
        userId: 3,
        roleId: 3
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('user_roles', null, {});
    
  }
};