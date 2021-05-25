const { Bottles } = require('../models');

const bottlesData = [
    {
        customer_id: `00001`,
        bottle_type: `Johnny Walker Blue`,
        name_on_bottle: `Andrew's Hookah`,
    },
//   Add Additional bottles seeds Below:

];

const seedBottles = () => Bottles.bulkCreate(bottlesData);

module.exports = seedBottles;
