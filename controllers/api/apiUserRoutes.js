const mysql = require("mysql2");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// need db connection up here
const db = mysql.createConnection({
    // put IP address of server instead of localhost
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME
  });

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
            
        if(!email || !password ) {
            return res.status(400).render('login', {
                message: 'Please provide an email and password'
            })
        }

        db.query('SELECT * FROM user WHERE email = ?', [email], async (error, results) => {
            console.log(results);
            if( !results || !(await bcrypt.compare(password, results[0].password))) {
                res.status(401).render('login', {
                    message: 'Incorrect email and/or password'
                })
            } else {
                const id = results[0].id;
                // id: id in js can be written just id
                const token = jwt.sign({ id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                console.log("The token is: " + token);

                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                } 
                res.cookie('jwt', token, cookieOptions);
                res.status(200).redirect("/");
            }
   
        })
 
    } catch (error) {
        console.log(error);
    }
}


//   function used to register user
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
