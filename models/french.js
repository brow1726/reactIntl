var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var French = new Schema({
  hello: String,
  goodbye: String
});

var FrenchSchema = mongoose.model('fr', French);

module.exports = FrenchSchema;