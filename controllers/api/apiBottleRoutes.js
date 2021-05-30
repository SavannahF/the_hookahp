const mysql = require("mysql2");
const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');


const db = mysql.createConnection({
  // put IP address of server instead of localhost
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
});


// Insert a bottle configuration for a specific User:
exports.bottles = (req, res) => {
  console.log(req.body);
  // Declare request.body
  const {id, bottle_type, hose_qty, lt_flag, name_on_bottle, price} = req.body;
  // Declare the request.body as an object
  const newBottleData = [id, bottle_type, hose_qty, lt_flag, name_on_bottle, price]
  //  Need to add in logic similar to userRoutes to show the id of a logged in person
    // Assuming we could just use the same token logic seen in else statment of API UserRoutes:


  // Will have to change the value for id to be what was declared above as the current user's id from sessions
  db.query(`INSERT INTO bottle SET ? WHERE id=${id}`, 
    {
      // Probably will need to change the id relation below like above
      id: newBottleData.id,
      bottleType: newBottleData.bottle_type,
      hoseQty: newBottleData.hose_qty,
      light: newBottleData.lt_flag,
      bottleName: newBottleData.name_on_bottle,
      price: newBottleData.price,
    },
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        console.log(res);
        return res.render('bottle', {
          message: `Hookah Configured!`
        })
      }
  })
}

// Select all bottle for the current user from DB
exports.bottles = (req, res) => {
  // Declare request.body
  const { id, bottle_type, hose_qty, lt_flag, name_on_bottle, price } = req.body;
  const bottleData = { id, bottle_type, hose_qty, lt_flag, name_on_bottle, price }
  console.log(bottleData);
  
  
// Assuming we could just use the same token logic seen in else statment of API UserRoutes:
    const id = results[0].id;
    // id: id in js can be written just id
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    console.log("The token is: " + token);

    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    } 
    res.cookie('jwt', token, cookieOptions);
    res.status(200).redirect("/");

  // Query for all bottles created by current user ID: obvi change the param below
  db.query(`SELECT * FROM bottle WHERE ?`, {id: currentUser}, (err, res) => {
  // console log responses
  if (res[0]) {
    console.log(
      `
      ID: ${res[0].id} ||
      BottleType: ${res[0].bottle_type} ||
      HoseQty: ${res[0].hose_qty} ||
      Light: ${res[0].lt_flag} ||
      NameOnBottle: ${res[0].name_on_bottle} ||
      Price: ${res[0].price}
      `
    );
    // Need to put in the logic here to actually be able to render all bottles that were configured


  } else {
    console.err(`No Hookahs configured`)
    }
  })
}  


// const router = require("express").Router();
const { User, Bottle } = require('../../models');
const e = require("express");

//everything in here is on
// /api/bottles
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