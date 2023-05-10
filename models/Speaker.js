// models/Speaker.js
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize  = require('../config/sequelize');
const User = require('./User');
const Talk = require('./Talk');

class Speaker extends Model {}

Speaker.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  topic: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // userId and talkId will be added automatically by Sequelize
}, {
  sequelize,
  modelName: 'Speaker'
});

// Define the relationships
Speaker.belongsTo(User, { foreignKey: 'speaker_id', as: 'speaker' });
Speaker.belongsTo(Talk, { foreignKey: 'talk_id', as: 'talk' });

User.hasMany(Speaker, { foreignKey: 'speaker_id', as: 'speakers' });
Talk.hasMany(Speaker, { foreignKey: 'talk_id', as: 'speakers' });

module.exports = Speaker;
