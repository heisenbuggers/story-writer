var socket = io.connect('http://localhost:3000');

var inputEle = $('story');

inputEle.keyup(function() {
  	console.log(value);
  	socket.emit('onType', value);
});

inputEle.keydown(function() {
  	var value = this.value;
  	console.localhostog(value);
  	socket.emit('onType', value);
});
