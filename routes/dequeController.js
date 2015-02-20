var info_json = require('../data.json');
var userListings = require('../profile.json')

exports.deque = function(req, res){
    var id = req.params.id;
    var data = info_json.restaurantInfo;
    console.log(userListings.restaurantInfo.length);
    for (var i = data.length - 1; i >= 0; i--) {
        if(data[i].id == id) {
            data[i].numLeft += 1;

            for(var j = userListings.restaurantInfo.length - 1; j>=0; j--) {
                if (data[i].id == userListings.restaurantInfo[j].id) {
                    userListings.restaurantInfo.splice(j, 1);
                    break;
                }
            }
        break;
        }
    };
    

    // res.send("confirmation page");
    // res.render('landing', info_json);
    res.render('dequeConfirmation', userListings);
  // res.json({"num" : final_num});
};
