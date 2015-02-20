var data = require('../data.json');
var profile = require('../profile.json')

exports.viewIndex = function(req, res){
  res.render('index', data);
};
exports.viewConfirmation = function(req, res){
  res.render('confirmation', profile);
};

exports.viewLanding = function(req, res){
  res.render('landing', data);
};

exports.viewProfile= function(req, res){
  res.render('profile', profile);
};
