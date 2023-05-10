const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize  = require('../config/sequelize');

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  password: DataTypes.STRING,
  is_verified: DataTypes.BOOLEAN,
  verification_string: DataTypes.STRING,
  created_at: DataTypes.DATE,
  updated_at: DataTypes.DATE,
  is_admin: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'User',
  timestamps: false
});


module.exports = User;

