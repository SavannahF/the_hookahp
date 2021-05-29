// pages.js

const express = require('express');
const router = express.Router();

//  /
router.get('/',  (req, res) => {
    res.render('home')
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

module.exports = router;
