var mongoose = require('mongoose')
var Schema = mongoose.Schema

var codeCardSchema = new Schema({
  //provided by Github:
  eventId: Number,
  date: Date,
  commits: Number,
  project: Array,
})

var codeCard = mongoose.model( 'codeCard', codeCardSchema )

module.exports = codeCard