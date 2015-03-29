'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CardSchema = new Schema({
  name: String,
  description: String,
  type: String,
  subType: String,
  deck: String,
  color: [],
  colorID: [],
  rulesText: [],
  flavor: String,
  power: Number,
  toughness: Number,
  rarity: String,
  blockSet: String
});

module.exports = mongoose.model('Card', CardSchema);
