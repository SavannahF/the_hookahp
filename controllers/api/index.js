// auth.js
const express = require('express');
const router = express.Router();
const apiController = require('./apiUserRoutes');
const apiBottleRoutes = require('./apiBottleRoutes');

router.post('/register', apiController.register);
router.post('/login', apiController.login);
// router.post('/bottle', apiBottleRoutes.bottle);

router.use('/create-bottle', apiBottleRoutes);


module.exports = router;
