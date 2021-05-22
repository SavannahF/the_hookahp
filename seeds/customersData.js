const { Customers } = require('../models');

const customersData = [
    {
        customer_id: `00001`,
        customer_first_name: `Andrew`,
        customer_last_name: `Patison`,
        customer_password: `patAttack987`,
        customer_email: `acpatison@gmail.com`,
    },
    {
        customer_id: `00002`,
        customer_first_name: `Nadia`,
        customer_last_name: `Dorado`,
        customer_password: `LaDorada123`,
        customer_email: `nadiadorado@gmail.com`,
    },
    {
        customer_id: `00003`,
        customer_first_name: `Nadia`,
        customer_last_name: `Dorado`,
        customer_password: `FortSav192`,
        customer_email: `savannah.fortson@gmail.com`,
    },
    {
        customer_id: `00004`,
        customer_first_name: `Paulo`,
        customer_last_name: `de Sa`,
        customer_password: `SeaPaulo918`,
        customer_email: `Paulo's Email`,
    },
  //   Add Additional Customers seeds below:
];

const seedCustomers = () => Customers.bulkCreate(customersData);

module.exports = seedCustomers;
