const Sequelize = require('sequelize');

module.exports = sequelize.define("User", {
    id:{
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement:true,
        primaryKey: true,
    },

    firstName: Sequelize.STRING(30),
    lastName: Sequelize.STRING(30),
    phoneNumber: Sequelize.STRING(12),
    googleID: Sequelize.STRING(100),
    UserId: {
        type: Sequelize.INTEGER(30),
        allowNull: false,
        unique: true,
    },
    
});