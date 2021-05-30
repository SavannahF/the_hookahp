const { Bottle } = require("../models");

const bottlesData = [
  {
    bottle_type: `Hennessy VS Cognac 750ml`,
    hose_qty: 3,
    lt_flag: true,
    name_on_bottle: `Andrew's Hookah`,
    price: 150.0,
    filename: '01-Hennessy.jpg',
  },
  {
    bottle_type: `Jameson Irish Whiskey 1L`,
    hose_qty: 2,
    lt_flag: false,
    name_on_bottle: `Carol`,
    price: 100.0,
    filename: '02-Jameson.jpg',
  },
  //   Add Additional bottles seeds Below:
];

const seedBottles = () => Bottle.bulkCreate(bottlesData);

module.exports = seedBottles;
