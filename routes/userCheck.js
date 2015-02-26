var profile = require('../profile.json')

exports.check = function(req, res) {
    var id = req.params.id;
    console.log(id);
    // var data = {"name": "bitch"};
    // res.json(data);

    var restaurantInfo = profile.restaurantInfo;
    for (var i = 0; i < restaurantInfo.length; i++) {
        if (restaurantInfo[i].id == id) {
            return res.send('Fail');
        }
    }

    return res.send("Success");
};