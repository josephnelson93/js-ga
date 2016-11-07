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

//Surely, there is a better way than nesting these find statements?
// 	CodeCard.find({}, function( req, codeCard){
// 		RunCard.find({}, function(req, runCard){
// 		 res.render('index', { codeCard: codeCard, 
// 		 	runCard: runCard, })
// 		})
// 	})
// })

	// ReadCard.find({}, function( req, readCard){
	// 	res.render('index', { readCard: readCard })

	// })

	ReadCard.find({}, function( req, readCard){
		CodeCard.find({}, function(req, codeCard){
			RunCard.find({}, function(req, runCard){
		 		res.render('index', { readCard: readCard, codeCard: codeCard, runCard: runCard, })
			})
		})
	})


})


/*
Read card routes

*/
app.get('/readCards/new', function( req , res ) {

  res.render('readCards/new')

})

app.post('/readCard', function( req , res ) {

  var newReadCard = new ReadCard({
    date: req.body.date,
    startPage: req.body.startPage,
    endPage: req.body.endPage,
    bookTitle: req.body.bookTitle,
    timeSpent: req.body.timeSpent,
    pagesRead: req.body.endPage-req.body.startPage,
  })

  newReadCard.save()

  res.redirect('/')

})

app.get('/readCard/:id', function( req, res ) {

  ReadCard.findById( req.params.id, function( err, readCard ){

    res.render( 'readCards/readCard', { readCard: readCard } )

  })

})


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


/*
Run card routes
*/

app.get('/runCards/new', function( req , res ) {

  res.render('runCards/new')

})

app.post('/runCard', function( req , res ) {

  var newRunCard = new RunCard({
    date: req.body.date,
    distance: req.body.distance,
    timeSpent: req.body.timeSpent,
    pace: req.body.pace,
  })

  newRunCard.save()

  res.redirect('/')

})

app.get('/runCard/:id', function( req, res ) {

  RunCard.findById( req.params.id, function( err, runCard ){

    res.render( 'runCards/runCard', { runCard: runCard } )

  })

})




app.listen( 3000, function() {

  console.log( 'running on 3000' )

}) 

//https://api.github.com/users/josephofiowa/events/public

