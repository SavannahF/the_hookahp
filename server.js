if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const initializePassport = require('./config/passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

const users = []

app.set('view-engine', 'handlebars')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))




const PORT = process.env.PORT || 3006;

// const hbs = exphbs.create({ handlebars });

app.engine("handlebars", exphbs());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

// app.get('/', (req,res) => {
//    res.render('home')
// })

// app.get('/hookahs', (req, res) => {
//     const hookahs = 'search the database for hookahs'
//     const prices = [5.00, 49.99,100]
//     res.render('hookahs', {
//         prices,
//         hookahs
//     })
// })

// app.listen(3000)
