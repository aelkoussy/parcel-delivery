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

    // password is example
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Finn",
          lastName: "Alexander",
          phone: "111-222-3333",
          email: "Finn@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C", // password is example
          role: "manager",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          firstName: "Jan",
          lastName: "Christian",
          phone: "444-555-6666",
          email: "Jan@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C",
          role: "biker",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          firstName: "Jonas",
          lastName: "Heinrich",
          phone: "444-555-6666",
          email: "Jonas@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C",
          role: "biker",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          firstName: "Walter",
          lastName: "Wilhelm",
          phone: "444-555-6666",
          email: "Walter@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C",
          role: "biker",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          firstName: "Tom",
          lastName: "Sebastian",
          phone: "402-437-0001",
          email: "Tom@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C",
          role: "biker",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          firstName: "Martin",
          lastName: "Thomas",
          phone: "402-437-0001",
          email: "Martin@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C",
          role: "biker",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          firstName: "Daniel",
          lastName: "Peter",
          phone: "402-437-0001",
          email: "Daniel@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C",
          role: "biker",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          firstName: "Alexander",
          lastName: "Sebastian",
          phone: "402-437-0001",
          email: "Alexander@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C",
          role: "biker",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        },
        {
          firstName: "Sebastian",
          lastName: "Peter",
          phone: "402-437-0001",
          email: "Sebastian@example.com",
          password:
            "$2b$10$HUIH9eynI9nGOy.kNVwwR.A4oxH3ERsqA/1nDJz49rs9iB2u9Co3C",
          role: "biker",
          createdAt: new Date().toDateString(),
          updatedAt: new Date().toDateString()
        }
      ],
      {
        individualHooks: true
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {});
  }
};
