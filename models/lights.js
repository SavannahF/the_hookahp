const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Lights extends Model {}

Lights.init(
  {
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    lt_flag: {
      type: DataTypes.BOOL,
      allowNull: false,
    },
    lt_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'lights',
  }
);

module.exports = Lights;
