'use strict';

var _ = require('lodash');
var Allcard = require('./allcard.model');

// Get list of allcards
exports.index = function(req, res) {
  Allcard.find(function (err, allcards) {
    if(err) { return handleError(res, err); }
    return res.json(200, allcards);
  });
};

// Get a single allcard
exports.show = function(req, res) {
  Allcard.findById(req.params.id, function (err, allcard) {
    if(err) { return handleError(res, err); }
    if(!allcard) { return res.send(404); }
    return res.json(allcard);
  });
};

// Creates a new allcard in the DB.
exports.create = function(req, res) {
  Allcard.create(req.body, function(err, allcard) {
    if(err) { return handleError(res, err); }
    return res.json(201, allcard);
  });
};

// Updates an existing allcard in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Allcard.findById(req.params.id, function (err, allcard) {
    if (err) { return handleError(res, err); }
    if(!allcard) { return res.send(404); }
    var updated = _.merge(allcard, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, allcard);
    });
  });
};

// Deletes a allcard from the DB.
exports.destroy = function(req, res) {
  Allcard.findById(req.params.id, function (err, allcard) {
    if(err) { return handleError(res, err); }
    if(!allcard) { return res.send(404); }
    allcard.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}