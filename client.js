var socket = io();
var count = 0;
var pulseSize = 2;

socket.on('leggo', function(msg){
	$('#tweets').prepend($('<li>').text(msg.time + ' - @' + msg.user + ': \"' + msg.text + '\"'));
	//console.log(msg);
	count++;
	$('#counter').text(count);

	cube.scale.set(pulseSize, pulseSize, pulseSize);

	setInterval(function() {
		cube.scale.set(1,1,1);
	}, 300);
});