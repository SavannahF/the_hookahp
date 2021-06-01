const express = require('express');
const router = express.Router();

//  /
router.get('/',  (req, res) => {
    res.render('home', {
        user: req.user || null
    })
    // send this in the res.render when auth is up { name: req.user.name }: this puts the name of the user 
})

//  /register
router.get('/register', (req, res) => {
    res.render('register')
})

//  /login
router.get('/login', (req, res) => {
    res.render('login')
})

//  /create-bottle
router.get('/create-bottle', (req, res) => {
    res.render('create_bottle')
    // res.render('create_bottle=this is the hbs file name')
})

module.exports = router;
