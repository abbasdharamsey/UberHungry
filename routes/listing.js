var data = require('../data.json');

exports.addNewListing = function(req, res){
  //res.render('index', data);
  var newListing = {
      "restaurant": req.query.res_name,
      "time_l": req.query.timeL,
      "time_r": req.query.timeR,
      "numLeft": parseInt(req.query.passenger_num),
      "meeting_place": req.query.where
  }
  console.log(newListing);
  data.restaurantInfo.push(newListing);
  res.render('add_listing', data); 
}
