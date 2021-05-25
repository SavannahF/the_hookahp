// const path = require("path");
const express = require("express");
// const exphbs = require("express-handlebars");
const routes = require("./controllers");

const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3006;

// const hbs = exphbs.create({ helpers });

// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

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
