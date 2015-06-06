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
   	 	io.emit('newStory', data);
  	});

  	socket.on('sendPic', function (data) {
   	 	io.emit('sendURL', data);
  	});
});
