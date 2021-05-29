const express = require('express');
const router = express.Router();

// const app = express();
// app.use(express.json());

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
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    // console.log(users)
})






router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})
// END HERE

module.exports = router;
