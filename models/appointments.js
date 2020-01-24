'use strict';
module.exports = (sequelize, DataTypes) => {
  const appointments = sequelize.define('appointments', {
    Day: DataTypes.DATE,
    googleID: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    NumOfOccur: DataTypes.INTEGER
  }, {});
  appointments.associate = function(models) {
    // associations can be defined here
  };
  return appointments;
};