const mysql = require("mysql2");
const router = require("express").Router();
const { User, Bottle } = require("../../models");


// const db = mysql.createConnection({
//   // put IP address of server instead of localhost
//   host: process.env.DB_HOST,
//   // host: process.env.JAWSDB_URL,
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: process.env.DB_NAME,
// });


// Get all Bottles for a given ID:
// router.get("/bottle/:id", async (req, res) => {
//   try {
//     const dbBottleData = await Bottle.findAll(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: [
//             `id`,
//             `bottle_type`,
//             `hose_qty`,
//             `lt_flag`,
//             `name_on_bottle`,
//             `price`,
//             `filename`
//           ],
//         },
//       ],
//     });
//     // If there are no entries for bottles for the given ID:
//     if (!dbBottleData) {
//       res.status(404).json({ message: "Sorry, no bottle found for this User" });
//       return;
//     };
//   res.status(200).json(dbBottleData);

//   const bottlesPerId = dbBottleData.map((bottles) =>
//     bottles.get({ plain: true })
//   );
//   res.render(`bottlesCart`, {
//     bottlesPerId,
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// Create a Bottle with given User ID:
// router.post(`/create_bottle`, async (req, res) => {
//   try {
//     const bottleData = await Bottle.create({
//       id: req.body.id,
//       bottle_type: req.body.bottle_type,
//       hose_qty: req.body.hose_qty,
//       lt_flag: req.body.hose_qty,
//       name_on_bottle: req.body.name_on_bottle,
//       price: req.body.price,
//     });
//     res.status(200).json(bottleData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

//  /api/bottle
router.post(`/bottle`, async (req, res) => {
  Bottle.create(
    {
      id: req.body.id,
      bottle_type: req.body.bottle_type,
      hose_qty: req.body.hose_qty,
      lt_flag: req.body.hose_qty,
      name_on_bottle: req.body.name_on_bottle,
      price: req.body.price,
    }.then((newBottle) => {
      res.json(newBottle);
      res.status(400).render('create_bottle');
    })
  )
})

// api/bottle
// Delete a bottle by its `ID` value
router.delete("/bottle/:id", async (req, res) => {
  Bottle.findByPk(req.params.id)
    .then((deleteBottle) => {
      deleteBottle.destroy();
    })
    .then((deleteBottle) => {
      res.json(deleteBottle);
      res.sendStatus(200);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
