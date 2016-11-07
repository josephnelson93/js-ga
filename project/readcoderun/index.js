var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

// Connect to our Mongo database, using Mongoose
mongoose.connect('mongodb://localhost:27017/')

// Include Models
var CodeCard = require('./models/codeCard')
var ReadCard = require('./models/readCard')
var RunCard = require('./models/runCard')

// Creating our Application
var app = express()

// Registering and using our template engine
app.engine('handlebars', hbs({defaultLayout: 'default'}))
app.set('view engine', 'handlebars')

// Serving static files (like css)
app.use(express.static('public'));

// Use Body Parser
app.use(bodyParser.urlencoded({extended: true}))



// Routes
app.get('/', function( req , res ) {

	CodeCard.find({}, function( req, codeCard){

    	res.render('index', { card: codeCard })
	})

})

/*
Run card routes


app.get('/runCards/new', function( req , res ) {

  res.render('runCards/new')

})

app.post('/codeCard', function( req , res ) {

  var newCodeCard = new CodeCard({
    date: req.body.date,
    commits: req.body.commits,
    project: req.body.project,
  })

  newCodeCard.save()

  res.redirect('/')

})

app.get('/codeCard/:id', function( req, res ) {

  CodeCard.findById( req.params.id, function( err, codeCard ){

    res.render( 'codeCards/codeCard', { codeCard: codeCard } )

  })

})
*/


/*
Code card routes

*/
app.get('/codeCards/new', function( req , res ) {

  res.render('codeCards/new')

})

app.post('/codeCard', function( req , res ) {

  var newCodeCard = new CodeCard({
    date: req.body.date,
    commits: req.body.commits,
    project: req.body.project,
  })

  newCodeCard.save()

  res.redirect('/')

})

app.get('/codeCard/:id', function( req, res ) {

  CodeCard.findById( req.params.id, function( err, codeCard ){

    res.render( 'codeCards/codeCard', { codeCard: codeCard } )

  })

})






app.listen( 3000, function() {

  console.log( 'running on 3000' )

}) 

//https://api.github.com/users/josephofiowa/events/public

