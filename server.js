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
const path = require("path");

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

const users = []

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

