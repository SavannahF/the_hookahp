const router = require('express').Router();

const apiRoutes = require('./api/');
// const homeRoutes = require('./home-routes.js');
const htmlRoutes = require('./htmlRoutes.js');

// router.use('/', homeRoutes);
router.use('/htmlRoutes', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;