const Sequelize = require('sequelize');

const sequelize = require('../database');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});

User.sync();

module.exports = User;
