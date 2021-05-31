
const { User } = require("../models");

const userData = [
  {
    name: `Andrew`,
    email: `acpatison@gmail.com`,
    password: `patAttack987`,
  },
  {
    name: `Nadia`,
    email: `nadiadorado@gmail.com`,
    password: `LaDorada123`,
  },
  {
    name: `Savannah`,
    email: `savannah.fortson@gmail.com`,
    password: `FortSav192`, 
  },
  {
    name: `Paulo`,
    email: `Paulo@gmail.com`,
    password: `SeaPaulo918`,
  },
  //   Add Additional Customers seeds below:
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

