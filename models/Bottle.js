// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize bottle model (table) by extending off Sequelize's Model class
class Bottle extends Model {}

// set up fields and rules for Bottle model
Bottle.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    bottle_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hose_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lt_flag: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    name_on_bottle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    filename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "bottle",
  }
);

module.exports = Bottle;
