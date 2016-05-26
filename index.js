require('newrelic');

var http = require('http');
var sleep = require('sleep-async');

var Sequelize = require('sequelize');
var db = new Sequelize('postgres://liz.savage@localhost:5432/actw_development');

var server = http.createServer(function (req, res) {
	db.query('SELECT title FROM movies;').then(function(result) {
		var title = result[0][0].title;
 		res.writeHead(200, {'Content-Type': 'text/html'});
 		res.end('Here is a random movie title: ' + title);
	});
});

server.listen(3000);

