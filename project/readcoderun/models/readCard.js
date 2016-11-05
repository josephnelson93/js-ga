var mongoose = require('mongoose')
var Schema = mongoose.Schema

var readCardSchema = new Schema({
  cardType: "Read",
  date: Date,
  startPage: int,
  endPage: int,
  bookTitle: String,
  timeSpent: Date,
})

var readCard = mongoose.model( 'readCard', readCardSchema )

module.exports = readCard
