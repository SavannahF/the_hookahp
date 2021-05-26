const { User } = require("../models");

const userData = [
  {
    customer_first_name: `Andrew`,
    customer_last_name: `Patison`,
    // customer_email: `acpatison@gmail.com`,
    // customer_password: `patAttack987`,
  },
  {
    customer_first_name: `Nadia`,
    customer_last_name: `Dorado`,
    // customer_email: `nadiadorado@gmail.com`,
    // customer_password: `LaDorada123`,
  },
  {
    customer_first_name: `Nadia`,
    customer_last_name: `Dorado`,
    // customer_email: `savannah.fortson@gmail.com`,
    // customer_password: `FortSav192`,
  },
  {
    customer_first_name: `Paulo`,
    customer_last_name: `de Sa`,
    // customer_email: `Paulo@gmail.com`,
    customer_password: `SeaPaulo918`,
  },
  //   Add Additional Customers seeds below:
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

