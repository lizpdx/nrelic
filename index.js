var http = require('http');
var nr = require('newrelic');
var sleep = require('sleep-async');
// var sleep = require('sleep');

var server = http.createServer(function (req, res) {
	// sleep.sleep(2);
	sleep().sleep(2000, function() {
	  res.writeHead(200, {'Content-Type': 'text/html'});
  	res.end('Hello. The time is now ' + new Date());
	});
});

server.listen(3000);

