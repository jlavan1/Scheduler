'use strict';

const Sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Appointment", {
      id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
    },

    Day: {
        type: Sequelize.DATE,
        allowNull: false,

    },
    UserId: {
        type: Sequelize.INTEGER(30),
        allowNull: false,
        unique: true,
    },
    NumOfOccur: Sequelize.INTEGER(30),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    
});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Appointment");
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};

