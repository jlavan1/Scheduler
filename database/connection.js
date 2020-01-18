const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Scheduler', 'root', '', {
    host: '127.0.01', 
    dialect: 'mysql', 
});

module.exports = sequelize;

global.sequelize = sequelize;