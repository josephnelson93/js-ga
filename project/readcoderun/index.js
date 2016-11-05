var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

// Connect to our Mongo database, using Mongoose
mongoose.connect('mongodb://localhost:27017/')

// Include Models
var codeCard = require('./models/codeCard')
var readCard = require('./models/readCard')
var runCard = require('./models/runCard')

// Creating our Application
var app = express()

// Registering and using our template engine
// app.engine('handlebars', hbs({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')

// Serving static files (like css)
//app.use(express.static('public'));

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}))

// Routes
app.get('/', function( req , res ) {

    res.send('This is cool')

})

app.listen( 3000, function() {

  console.log( 'running on 3000' )

}) 

//https://api.github.com/users/josephofiowa/events/public

