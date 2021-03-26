'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      { id: 1, name: 'SuperADMIN' },
      { id: 2, name: 'ADMIN' },
      { id: 3, name: 'USER' }
    ], {})
    .catch((error) => console.log("ROLE ERROR", error));
  },

  down: (queryInterface, Sequelize) => {    
      return queryInterface.bulkDelete('roles', null, {});    
  }
};
