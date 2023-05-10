const { Sequelize } = require('sequelize');
const config = require('./database'); 

const environment = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[environment]);

module.exports = sequelize;

