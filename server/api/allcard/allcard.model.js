'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AllcardSchema = new Schema({
  name: String,
  description: String,
  type: String,
  subType: String,
  color: {
    blue: Boolean,
    red: Boolean,
    black: Boolean,
    green: Boolean,
    white: Boolean
  },
  colorID: {
    blue: Boolean,
    red: Boolean,
    black: Boolean,
    green: Boolean,
    white: Boolean
  },
  rules: String,
  flavor: String,
  power: Number,
  toughness: Number,
  rarity: String,
  blockSet: String
});

module.exports = mongoose.model('Allcard', AllcardSchema);
