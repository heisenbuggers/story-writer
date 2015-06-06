var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	port = process.env.PORT || 3000,
	io = require('socket.io')(server,{log : true});

app.use(express.static(__dirname));

var memory = [];

server.listen(port,function(){
	console.log('Express listening at ' + port);
});

io.on('connection', function (socket) {

	io.emit('onNewUser', memory);

	socket.on('onType', function (data) {
		memory.push(data);
   	 	io.emit('newStory', data);
  	});

  	socket.on('sendPic', function (data) {
  		memory.push(data);
   	 	io.emit('sendURL', data);
  	});

  	// socket.on('disconnect', function () { 
  	// 	memory = [];
  	// });
});

io.on('end', function(){
	memory = [];
});
