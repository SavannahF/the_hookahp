const sequelize = require('../config/connection');
const seedCustomers = require('./customersData');
const seedBottles = require('./bottlesData');
const seedLights = require('./lightsData');
const seedHoses = require('./hosesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCustomers();

  await seedBottles();

  await seedLights();

  await seedHoses();

  process.exit(0);
};

seedAll();