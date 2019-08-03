'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return Promise.all([queryInterface.bulkInsert('Tasks', [
      {description: 'Tomar los primeros 4 modulos del curso', createdAt: new Date(), updatedAt: new Date()},
      {description: 'Realizar un ejemplo de lo aprendido hasta ahora', createdAt: new Date(), updatedAt: new Date()},
      {description: 'Proseguir con los siguientes Modulos', createdAt: new Date(), updatedAt: new Date()},
    ], {})]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
