const express = require('express');
const router = express.Router();
// const router = require('express').Router();
const apiRoutes = require('./api');
const loginRoutes = require('./login-routes')

// app.js

// Define routes
router.use('/api', apiRoutes);
router.use('/', loginRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });

module.exports = router;