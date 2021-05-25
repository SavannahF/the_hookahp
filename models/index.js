const Customers = require('./customers');
const Bottles = require('./bottles');
const Lights = require('./lights');
const Hoses = require('./hoses');

// Customers to Bottles
Customers.hasMany(Bottles, {
    foreignKey: 'customer_id',
});
Bottles.belongsTo(Customers, {
    foreignKey: 'customer_id',
});

// Customer to Hoses
Customers.hasMany(Hoses, {
    foreignKey: 'customer_id',
});
Hoses.belongsTo(Customers, {
    foreignKey: 'customer_id',
});

// Customer to Lights
Customers.hasMany(Lights, {
    foreignKey: 'customer_id',
});
Lights.belongsTo(Customers, {
    foreignKey: 'customer_id',
});

module.exports = { Customers, Bottles, Lights, Hoses };
