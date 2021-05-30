const express = require("express");
const router = express.Router();
// const router = require('express').Router();
const apiRoutes = require("./api");
const loginRoutes = require("./login-routes");

// app.js

// Define routes
router.use("/api", apiRoutes);
router.use("/", loginRoutes);


module.exports = router;
