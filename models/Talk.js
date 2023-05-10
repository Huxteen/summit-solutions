// models/Talk.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const User = require('./User');

class Talk extends Model {}

Talk.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  creator_id: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  start_time: DataTypes.DATE,
  end_time: DataTypes.DATE,
  location: DataTypes.STRING
}, { sequelize, modelName: 'talk' });

Talk.belongsTo(User, { foreignKey: 'creator_id' });
User.hasMany(Talk, { foreignKey: 'creator_id' });

module.exports = Talk;
