// import models
const Bottle = require("./Bottle");
const User = require("./User");


// Association methods

// Bottle belongsTo User
Bottle.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

// Users have many Bottles
User.hasMany(Bottle, {
  foreignKey: "user_id",
});

module.exports = {
  Bottle,
  User, 
};
