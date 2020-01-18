'use strict';

const Sequelize = require("sequelize");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("login", {
      id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
    },

    Email: {
        type: Sequelize.STRING(30),
        allowNull: false,
        unique: true,

    },
    Password: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
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
    return queryInterface.dropTable("login");
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
