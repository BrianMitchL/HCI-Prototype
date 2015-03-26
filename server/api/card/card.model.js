'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
  name: String,
  description: String,
  type: String,
  deck: String,
  color: [],
  attributes: {
    power: Number,
    toughness: Number
  }
});

module.exports = mongoose.model('Card', CardSchema);
