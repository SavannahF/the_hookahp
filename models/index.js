const mySql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ``,
    database: 'the_hookahpDB',
});

// What GET and POST APIs come next all depend on what our HTML functionality is that we choose
// Create New Account
const createCustAcct = () => {
    console.log(`Creating New Customer Account...`);
    const newCust = connection.query(
        `INSERT INTO customers SET ?`,
        {
            customer_id: ``,
            customer_first_name: ``,
            customer_last_name: ``,
            customer_password: ``,
            customer_email: ``,
        },
        (err, res) => {
            if(err) throw err;
            console.log(`${res.affectedRows} customer inserted!\n`);
        }
    );
    console.log(newCust.sql);
}

const createCustomHookah = () => {
    console.log(`Create your Custom Liquor Bottle Hookah!`);
    const newHookah = connection.query()
}
















// Store in a vairable or function to invoke when user pushes a button!!!!!
// Connect to DB
const connectNow = connection.connect((err) => {
    if(err) throw err;
    console.log(`Connected as ID ${connection.threadId}`)
    // Need to figure out how to make Functions created above asynchronous and only invoked on a button click from the HTML view
    //      createCustAcct();
    // invoke adding customization to DB
    //      createCustomHookah();
})
