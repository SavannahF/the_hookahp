const router = require("express").Router();
const { User, Bottle } = require("../../models");

// Use the `/api/get-started-route` endpoint

// find all bottles/ works
router.get("/", async (req, res) => {
  try {
    const bottleData = await Bottle.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(bottleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one bottle by its `id` value/works
router.get("/:id", async (req, res) => {
  try {
    const bottleData = await Bottle.findOne({
      where: { id: req.params.id },
    });
    if (!bottleData) {
      res.status(404).json({ message: "Sorry No bottle found with this id" });
      return;
    }
    res.status(200).json(bottleData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a bottle by its `id` value/ WORKS
router.put("/:id", (req, res) => {
  Bottle.update(
    {
      name_on_bottle: req.body.name_on_bottle,
      //   price: req.body.price,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedBottle) => {
      res.json(updatedBottle);
    })
    .catch((err) => res.json(err));
});

// delete a bottle by its `id` value/ WORKS
router.delete("/:id", (req, res) => {
  Bottle.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteBottle) => {
      res.json(deleteBottle);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
