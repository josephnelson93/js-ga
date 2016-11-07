var mongoose = require('mongoose')
var Schema = mongoose.Schema

var codeCardSchema = new Schema({
  //provided by Github:
  eventId: Number,
  date: Date,
  commits: Number,
  project: Array,
})

var CodeCard = mongoose.model( 'CodeCard', codeCardSchema )

module.exports = CodeCard