const { Hoses } = require('../models');

const hosesData = [
    {
        customer_id: `00001`,
        hose_qty: 3,
        hose_color: `Blue`,
        hose_length: `medium`,
    },
    //   Add Additional Lights seeds below:
    
];

const seedHoses = () => Hoses.bulkCreate(hosesData);

module.exports = seedHoses;
