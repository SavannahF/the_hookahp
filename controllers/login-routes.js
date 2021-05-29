const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require("mysql2");

// const app = express();
// app.use(express.json());

const db = mysql.createConnection({
    // put IP address of server instead of localhost
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
});




// /
router.get('/',  (req, res) => {
    // console.log('slash is a wicked guitarist')
    res.render('home')
    // send this in the res.render when auth is up { name: req.user.name }: this puts the name of the user 
})

// /login
router.get('/login', (req, res) => {
    res.render('login')
})

//  /register
router.get('/register', (req, res) => {
    res.render('register')
})

// START HERE
// POST /login
// Need to figure out another post not involving passport

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// }))
// END HERE



router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            //id for the database
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    // console.log(users)
})

// db.add(users);

router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})
// END HERE

module.exports = router;
