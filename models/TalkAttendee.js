// models/TalkAttendee.js
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize  = require('../config/sequelize');
const User = require('./User');
const Talk = require('./Talk');

class TalkAttendee extends Model {}

TalkAttendee.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // attendeeId and talkId will be added automatically by Sequelize
}, {
  sequelize,
  modelName: 'TalkAttendee'
});

// Define the relationships
TalkAttendee.belongsTo(User, { foreignKey: 'attendee_id', as: 'attendee' });
TalkAttendee.belongsTo(Talk, { foreignKey: 'talk_id', as: 'talk' });

User.hasMany(TalkAttendee, { foreignKey: 'attendee_id', as: 'attendances' });
Talk.hasMany(TalkAttendee, { foreignKey: 'talk_id', as: 'attendees' });

module.exports = TalkAttendee;
