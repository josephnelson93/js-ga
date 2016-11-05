var mongoose = require('mongoose')
var Schema = mongoose.Schema

var runCardScheme = new Schema({
  cardType: "Run",
  date: Date,
  distance: String,
  timeSpent: Date,
  //pace provided by MapMyRun in x.yz/mi
  pace: float,
})

var runCard = mongoose.model( 'runCard', runCardSchema )

module.exports = runCard
