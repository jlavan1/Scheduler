const Sequelize = require('sequelize');

module.exports = sequelize.define("Appointment", {
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
    
});