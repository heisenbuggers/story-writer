var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	port = process.env.PORT || 3000,
	io = require('socket.io')(server,{log : true});

app.use(express.static(__dirname));

server.listen(port,function(){
	console.log('Express listening at ' + port);
});

io.on('connection', function (socket) {
	socket.on('onType', function (data) {
   	 	console.log(data);
   	 	io.emit('newStory', data);
  	});
});

io.on('connection', function (socket) {
	socket.on('onDraw', function (data) {
   	 	console.log(data);
   	 	io.emit('newDraw', data);
  	});
});
