const mysql = require("mysql2");
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// need out db connection up here
const db = mysql.createConnection({
    // put IP address of server instead of localhost
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  });

exports.register = (req,res) => {
    console.log(req.body);

    const {name, email, password, passwordConfirm} = req.body;

    // only one registration allowed per email
    db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results) => {
        if(error) {
            console.log(error);
        }
        // if > 0 , it means there is already that same email in the db
        if( results.length > 0 ) {
            return res.render('register', {
                message: 'That email is already registered'
            })
        // if password was different than passwordConfirm 
        } else if( password !== passwordConfirm) {
            return res.render('register', {
                message: 'Passwords do not match'
            });
        } 

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

       db.query('INSERT INTO user SET ?', {name: name, email: email, password: hashedPassword }, (error, results) => {
            if(error) {
                console.log(error);
            } else {
                console.log(results);
                return res.render('register', {
                    message: 'User registered'
                });
       }
    })

    }
)};
