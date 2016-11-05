var mongoose = require('mongoose')
var Schema = mongoose.Schema

var codeCardSchema = new Schema({
  cardType: "Code",
  //provided by Github:
  eventId: String,
  date: Date,
  commits: String,
  project: Array,
})

var codeCard = mongoose.model( 'codeCard', codeCardSchema )

module.exports = codeCard