const router = require('express').Router();

const customersRoutes = require('./customersRoutes');
const hosesRoutes = require('./hosesRoutes');
const lightsRoutes = require('./lightsRoutes');
const bottlesRoutes = require('./bottlesRoutes');

router.use('/customers', customersRoutes);
router.use('/hoses', hosesRoutes);
router.use('/lights', lightsRoutes);
router.use('/bottles', bottlesRoutes);

module.exports = router;
