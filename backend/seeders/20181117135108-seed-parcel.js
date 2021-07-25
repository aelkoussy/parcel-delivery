"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Parcels",
      [
        {
          origin: "Dresden",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Berlin",
          destination: "Hamburg",
          status: "ASSIGNED",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Köln",
          destination: "Stuttgart",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dortmund",
          destination: "Essen",
          status: "DELIVERED",
          UserID: 2,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Leipzig",
          destination: "Bremen",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Nürnberg",
          destination: "Munich",
          status: "ASSIGNED",
          UserID: 3,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Duisburg",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bochum",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Wuppertal",
          status: "PICKED_UP",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bonn",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Mannheim",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Berlin",
          destination: "Hamburg",
          status: "ASSIGNED",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Köln",
          destination: "Stuttgart",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dortmund",
          destination: "Essen",
          status: "DELIVERED",
          UserID: 2,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Leipzig",
          destination: "Bremen",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Nürnberg",
          destination: "Munich",
          status: "ASSIGNED",
          UserID: 3,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Duisburg",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bochum",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Wuppertal",
          status: "PICKED_UP",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bonn",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Mannheim",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Berlin",
          destination: "Hamburg",
          status: "ASSIGNED",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Köln",
          destination: "Stuttgart",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dortmund",
          destination: "Essen",
          status: "DELIVERED",
          UserID: 2,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Leipzig",
          destination: "Bremen",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Nürnberg",
          destination: "Munich",
          status: "ASSIGNED",
          UserID: 3,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Duisburg",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bochum",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Wuppertal",
          status: "PICKED_UP",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bonn",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Mannheim",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Berlin",
          destination: "Hamburg",
          status: "ASSIGNED",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Köln",
          destination: "Stuttgart",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dortmund",
          destination: "Essen",
          status: "DELIVERED",
          UserID: 2,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Leipzig",
          destination: "Bremen",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Nürnberg",
          destination: "Munich",
          status: "ASSIGNED",
          UserID: 3,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Duisburg",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bochum",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Wuppertal",
          status: "PICKED_UP",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bonn",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Mannheim",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dortmund",
          destination: "Essen",
          status: "DELIVERED",
          UserID: 2,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Leipzig",
          destination: "Bremen",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Nürnberg",
          destination: "Munich",
          status: "ASSIGNED",
          UserID: 3,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Duisburg",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bochum",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Wuppertal",
          status: "PICKED_UP",
          UserID: 1,
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Bonn",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Dresden",
          destination: "Mannheim",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          origin: "Chemnitz",
          destination: "Munich",
          status: "WAITING",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */

    return queryInterface.bulkDelete("Parcels", null, {});
  }
};
