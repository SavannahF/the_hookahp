const router = require("express").Router();
const getStartedRoute = require("./get-started-route");

router.use("/get-started-route", getStartedRoute);

module.exports = router;
