var mongoose = require('mongoose')
var Schema = mongoose.Schema

var readCardSchema = new Schema({
  date: Date,
  startPage: Number,
  endPage: Number,
  bookTitle: String,
  timeSpent: Date,
})

var ReadCard = mongoose.model( 'ReadCard', readCardSchema )

module.exports = ReadCard
