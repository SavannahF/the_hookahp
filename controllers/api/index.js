// auth.js
const express = require('express');
const router = express.Router();
const apiController = require('./apiUserRoutes');
// const apiBottleRoutes = require('./apiBottleRoutes');

router.post('/register', apiController.register);
router.post('/login', apiController.login);
// router.post('/bottle', apiBottleRoutes.bottle);

// // const router = require("express").Router();

// const apiUserRoutes = require("./apiUserRoutes");

// // /api/register
// router.use('/register', apiUserRoutes);

// // /api/bottles 
// router.use('/bottles', apiBottleRoutes);

// /api/users

module.exports = router;
