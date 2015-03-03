
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')
var get = require('./routes/get.js');
var listing = require("./routes/listing.js");
var enqueController = require("./routes/enqueController.js");
var dequeController = require("./routes/dequeController.js");
var userCheck = require("./routes/userCheck.js");

// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
// Example route
// app.get('/users', user.list);
app.get('/', get.viewIndex);
app.get('/landing', get.viewLanding);
app.get('/profile', get.viewProfile);
// app.get('/confirmation', get.viewConfirmation)
app.get('/add_listing', listing.addNewListing);
app.post('/profile', function(request, response){
    var data = require('./profile.json');
    console.log(request.body.name1);
    // if (data.userInfo[0]) {
    //   data.userInfo.splice(0, 1);
    // }
    console.log(request.body.number);
    var info = {
            "name": request.body.name1,
            "email": request.body.email,
            "phone": request.body.number
    };
    data.userInfo = info;
    // data.userInfo.name = request.body.name1;
    // data.userInfo.email= request.body.email;
    // data.userInfo.phone = request.body.number;
    // response.send(json);

    response.render('profile', data);

});

app.get("/enque/:id", enqueController.enque);
app.get("/deque/:id", dequeController.deque);
app.get("/userCheck/:id", userCheck.check);
// app.get('/confirmation', enqueController.enque);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
