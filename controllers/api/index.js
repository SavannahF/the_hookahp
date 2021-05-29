// auth.js
const express = require('express');
const router = express.Router();
const apiController = require('./apiUserRoutes-2');

router.post('/register', apiController.register)

// // const router = require("express").Router();

// const apiUserRoutes = require("./apiUserRoutes");
// const apiBottleRoutes = require('./apiBottleRoutes');



// // /api/register
// router.use('/register', apiUserRoutes);

// // /api/bottles 
// router.use('/bottles', apiBottleRoutes);

// /api/users

module.exports = router;
