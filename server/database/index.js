const Sequelize = require('sequelize');


const sequelize = new Sequelize(
    process.env.DB_DATABASE || 'game',
    process.env.DB_USERNAME || 'postgres',
    process.env.DB_PASSWORD || 'postgres', {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      timezone: '-03:00',
      dialect: 'postgres',
      protocol: 'postgres',
    //   logging: false,
    },
);


module.exports = sequelize;
