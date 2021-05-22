const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')



app.get('/', (req,res) => {
   res.render('home')
})

app.get('/hookahs', (req, res) => {
    const hookahs = 'search the database for hookahs'
    const prices = [5.00, 49.99,100]
    res.render('hookahs', {
        prices,
        hookahs
    })
})

app.listen(3000)
