const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bottles extends Model {}

Bottles.init(
  {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bottle_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name_on_bottle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'bottles',
  }
);

module.exports = Bottles;
