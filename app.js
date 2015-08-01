var express = require('express');
var path = require('path');

var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'client/views'));
app.set('view engine', 'ejs');


app.get('/', routes.index);
app.get('/about', routes.about);

app.get ('*', function(req, res) {
	res.send('Bad Route');
});

var server = app.listen(3000, function(req, res) {
	console.log("Server is listening on port 3000...");
});
