var express = require('express'),
	app = express(),
	http = require('http'),
	fs = require('fs'),
	port = process.env.PORT || 3000;

app.use('/public', express.static(__dirname + '/public'));

app.get('/*', function(req, res) {
	res.end(fs.readFileSync('index.html'));
});

http.createServer(app).listen(port, function(err) {
	console.log('Express server running on port', port);
});
