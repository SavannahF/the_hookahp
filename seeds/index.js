const seedBottle = require("./bottlesData");
const seedUser = require("./customersData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedUser();
  console.log("\n----- USER SEEDED -----\n");

  await seedBottle();
  console.log("\n----- BOTTLE SEEDED -----\n");

  process.exit(0);
};

seedAll();