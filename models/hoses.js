const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Hoses extends Model {}

Hoses.init(
  {
    customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    hose_qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    hose_color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hose_length: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'hoses',
  }
);

module.exports = Hoses;
