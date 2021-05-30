// auth.js
const express = require('express');
const router = express.Router();
const apiController = require('./apiUserRoutes');
const apiBottleController = require('./apiBottleRoutes');

router.post('/register', apiController.register)

router.get('/create_bottle', apiBottleController.create_bottle);

// // const router = require("express").Router();

// const apiUserRoutes = require("./apiUserRoutes");



// // /api/register
// router.use('/register', apiUserRoutes);


module.exports = router;
