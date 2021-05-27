const router = require("express").Router();
const apiUserRoutes = require("./apiUserRoutes");
const apiBottleRoutes = require('./apiBottleRoutes')

// /api/users
router.use("/users", apiUserRoutes);

// /api/bottles

router.use('/bottles', apiBottleRoutes)

module.exports = router;
