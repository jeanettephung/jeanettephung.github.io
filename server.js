var express    = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(require('./controllers'));

// connection to our database.
mongoose.connect('localhost:27017/bridge',function(){
    console.log('mongoose connected on server');
});

// opens our server to listen at local host 3000
var server = app.listen(3000, function () {
    console.log('server listening on %d', server.address().port)
});
