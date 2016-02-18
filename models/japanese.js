var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Japanese = new Schema({
  hello: String,
  goodbye: String
});

var JapaneseSchema = mongoose.model('ja', Japanese);

module.exports = JapaneseSchema;