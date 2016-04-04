/**
 * @name Connect Four App Server
 * @file app.js
 * @description Client App 
 * @author Sam Reaves
 * @date April 3rd, 2016
 */

var socket = io.connect('http://localhost:3000');

socket.on('messages', function(message) {
	console.log("message received: ", message.data);
	$('body').text(message.data);
});