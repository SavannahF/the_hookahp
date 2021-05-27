const router = require("express").Router();
const bcrypt = require('bcrypt')
const passport = require('passport')

// /
// confirmAuthUser,
router.get('/', (req, res) => {
    console.log('slash is a wicked guitarist')
    res.render('index')
    // send this in the res.render when auth is up { name: req.user.name }
})

// /login
router.get('/login', confirmUnauthUser, (req, res) => {
    res.render('login')
})


// POST /login
router.post('/login', confirmUnauthUser, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))



router.get('/register', confirmUnauthUser, (req, res) => {
    res.render('register')
})

router.post('/register', confirmUnauthUser, async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
})

router.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})

function confirmAuthUser(req, res, next) {
    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')
}

function confirmUnauthUser(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}

module.exports = router;



