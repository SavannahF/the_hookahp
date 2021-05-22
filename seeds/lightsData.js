const { Lights } = require('../models');

const lightsData = [
    {
        customer_id: `00001`,
        lt_flag: 1,
        lt_color: `Orange`,
    },
    //   Add Additional Lights seeds below:

];

const seedLights = () => Lights.bulkCreate(lightsData);

module.exports = seedLights;
