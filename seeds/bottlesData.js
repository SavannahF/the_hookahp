const { Bottle } = require("../models");

const bottlesData = [
  {
    bottle_type: `Johnny Walker Blue`,
    hose_qty: 3,
    lt_flag: true,
    name_on_bottle: `Andrew's Hookah`,
    price: 150.0,
  },
  {
    bottle_type: `Hennessy VS Cognac`,
    hose_qty: 2,
    lt_flag: false,
    name_on_bottle: `Flaca`,
    price: 100.0,
  },
  //   Add Additional bottles seeds Below:
];

const seedBottles = () => Bottle.bulkCreate(bottlesData);

module.exports = seedBottles;
