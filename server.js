// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config()
// }

const express = require('express')
const app = express()
const mysql = require("mysql2");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const morgan = require('Morgan');

dotenv.config({ path: `./.env`})

const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const PORT = process.env.PORT || 3006;
const path = require("path");

const publicDirectory = path.join(__dirname, './public');
  // console.log(__dirname);
app.use(express.static(publicDirectory));

app.engine('handlebars', hbs.engine);
// if handlebars isn't working, try changing the extentions to .hbs and change the line below to:
// app.set('view engine', 'hbs');
app.set('view engine', 'handlebars');

// Use Morgan
app.use(morgan("common"));

// Parse URL-enconded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

app.use(express.static("public"));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});

