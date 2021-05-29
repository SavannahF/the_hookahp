const router = require("express").Router();
const bcrypt = require('bcrypt');
const mysql = require("mysql2");
const { Bottle, User } = require('../../models');

//everything in here is on 

// Create Connection:
const db = mysql.createConnection({
    // put IP address of server instead of localhost
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});


// CREATE new User
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        // User.push({
        //     // How do we define this?
        //     // id: ``,
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: hashedPassword
        // })
        const userData = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        db.query(
            `INSERT INTO user SET ?`,
            {
                // id: ,
                name: userData.name,
                email: userData.email,
                password: userData.password,
            },
            (error, results) => {
                if(error) {
                    console.log(`Oh no!`);
                } else {
                    console.log(results);
                    return res.render(`login`, {
                        message: `User Registered`
                    })
                }
            });
        res.status(200).json(userData);
    } catch {
        res.redirect('/register')
    }
    // console.log(users)
})




module.exports = router