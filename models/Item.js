var mongoose = require('mongoose') //since we will be using mongoose again here, we will need to require it again locally
var Schema = mongoose.schema; //schemas organize your data in your DB
var ItemSchema = new Schema({
  name: String
});

module.exports = mongoose.model('Item', ItemSchema); //exports the ItemSchema under the name Item so that we can use it elsewhere