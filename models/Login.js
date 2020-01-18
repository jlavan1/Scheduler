const Sequelize = require('sequelize');

module.exports = sequelize.define("login", {
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
    }
    
});