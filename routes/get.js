var data = require('../data.json');

exports.viewIndex = function(req, res){
  res.render('index', data);
};

exports.viewLanding = function(req, res){
  res.render('landing', data);
};

exports.viewProfile= function(req, res){
  res.render('profile', data);
};
