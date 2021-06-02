const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
const loginRoutes = require('./login-routes')


// Define routes
router.use('/api', apiRoutes);
router.use('/', loginRoutes);


module.exports = router;