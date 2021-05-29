const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// 
// confirmAuthUser,
router.get('/',  (req, res) => {
    // console.log('slash is a wicked guitarist')
    res.render('index')
    // send this in the res.render when auth is up { name: req.user.name }: this puts the name of the user 
})

// /login
router.get('/login', (req, res) => {
    res.render('login')
})


// POST /login
// Need to figure out another post not involving passport

// router.post('/login', passport.authenticate('local', {
//     successRedirect: '/',
//     failureRedirect: '/login',
//     failureFlash: true
// }))



router.get('/register', (req, res) => {
    res.render('register')
})

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

router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})



// function confirmAuthUser(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next()
//     }

//     res.redirect('/login')
// }

// function confirmUnauthUser(req, res, next) {
//     if (req.isAuthenticated()) {
//         res.redirect('/')
//     }
//     next()
// }

module.exports = router;



