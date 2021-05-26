const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customer_first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    customer_last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    //   validate: {
    //     isEmail: true,
    //   },
    // },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [6],
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
