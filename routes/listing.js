var data = require('../data.json');
var profile = require('../profile.json');

exports.addNewListing = function(req, res) {
  //res.render('index', data);
  console.log(req.query);
  var newListing = {
      "name": req.query.user_name,
      "restaurant": req.query.res_name,
      "time_l": req.query.timeL,
      "time_r": req.query.timeR,
      "numLeft": parseInt(req.query.passenger_num),
      "meeting_place": req.query.where,
      "leader_phone": req.query.lea_phone
  }
  profile.userListings.push(newListing);
  console.log(newListing);
  data.restaurantInfo.push(newListing);
  res.render('add_listing', data); 
}

exports.deleteListing = function(req, res) {
    for (i = 0; i < data.restaurantInfo.length; i++) {
        console.log(data[i]);
        if (data.restaurantInfo[i].name == req.query.name && data.restaurantInfo[i].restaurant == req.query.restaurant) {
            console.log('here yee here yee');
            data.restaurantInfo.splice(i, 1);
        }
    }
    for (i = 0; i < profile.userListings.length; i++) {
        if (profile.userListings[i].name == req.query.name && profile.userListings[i].restaurant == req.query.restaurant) {
            console.log('here here');
            profile.userListings.splice(i, 1);
        }
    }
    console.log(req.query);
    res.render('profile', profile);
}