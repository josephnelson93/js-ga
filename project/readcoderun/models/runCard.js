var mongoose = require('mongoose')
var Schema = mongoose.Schema

var runCardSchema = new Schema({
  date: Date,
  distance: Number,
  timeSpent: Date,
  //pace provided by MapMyRun in x.yz/mi
  pace: Number,
})

var RunCard = mongoose.model( 'RunCard', runCardSchema )

module.exports = RunCard
