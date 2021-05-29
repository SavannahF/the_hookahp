if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const app = express()
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3006;

// const users = []

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

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
