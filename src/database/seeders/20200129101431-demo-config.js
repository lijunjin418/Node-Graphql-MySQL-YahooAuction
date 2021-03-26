'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
    return queryInterface.bulkInsert('Configs', [
      {
        item: 'phoneCustomer',
        val: '000-000-0000'
      },
      {
        item: 'phone',
        val: '12345678'
      },
      {
        item: 'priceRate',
        val: '0.0667'
      }      
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
    return queryInterface.bulkDelete('Configs', null, {});

  }
};