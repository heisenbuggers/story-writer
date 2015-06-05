$(function() {
	var socket = io.connect('http://localhost:3000');
  var box = $('#box');
	var inputEle = $('#story');

	inputEle.keyup(function() {
	  	var value = inputEle.val();
	  	socket.emit('onType', value);
	});

	inputEle.keydown(function() {
	  	var value = inputEle.val();
	  	socket.emit('onType', value);
	});
  socket.on('update',function(data){
    console.log(box);
  });
});
