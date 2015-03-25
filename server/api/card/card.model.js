'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
  name: String,
  description: String,
  type: String
});

module.exports = mongoose.model('Card', CardSchema);
