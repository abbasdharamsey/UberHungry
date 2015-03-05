var info_json = require('../data.json');
var profile = require('../profile.json')

exports.enque = function(req, res){
    var id = req.params.id;
    var final_num;
    var data = info_json.restaurantInfo;
    console.log(profile.restaurantInfo);
    for (var i = data.length - 1; i >= 0; i--) {
        if(data[i].id == id){
            data[i].numLeft -= 1;
            final_num = data[i].numLeft;
            console.log(data[i]);
            var newJson = {
                "id": data[i].id,
                "restaurant": data[i].restaurant,
                "time_l": data[i].time_l,
                "time_r": data[i].time_r,
                "numLeft": data[i].numLeft,
                "meeting_place": data[i].meeting_place,
                "leader": data[i].leader,
                "leader_phone": data[i].leader_phone
            }
            var restaurantInfo = {"restaurantInfo": []}
            profile.restaurantInfo.push(newJson);
            restaurantInfo.restaurantInfo.push(newJson);
            break;
        }
    };
    // profile.restaurantInfo.splice(0,1);

    // res.send("confirmation page");
    res.render('profile', profile);
    // res.render('profile', info_json);
  // res.json({"num" : final_num});
};
