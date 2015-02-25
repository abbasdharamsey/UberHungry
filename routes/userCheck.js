var userListings = require('../profile.json')

exports.check = function(req, res) {
    var id = req.params.id;
    // var data = {"name": "bitch"};
    // res.json(data);

    var restaurantInfo = userListings.restaurantInfo;
    for (var i = 0; i < restaurantInfo.length; i++) {
        if (restaurantInfo[i].id == id) {
            return res.send('Fail');
        }
    }

    return res.send("Success");
};