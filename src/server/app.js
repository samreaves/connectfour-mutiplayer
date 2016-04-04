/**
 * @name Connect Four App Server
 * @file app.js
 * @description Initializes server. 
 * @author Sam Reaves
 * @date April 3rd, 2016
 */

// Import Express and initialize server.
var http = require('http'),
		express = require('express'),
		app = module.exports.app = exports.app = express(),
		server = http.createServer(app),
		io = require('socket.io')(server),
		path = require('path'),
		host,
		port,
		static_directory = path.join(__dirname, '../client/');


// Establish static directory at client/public
app.use(express.static(static_directory));


// Route handler for root - sends current static landing page
app.get('/', function(req, res) {
  res.sendFile(path.join(static_directory, "index.html"));
});

io.on('connection', function(client) {
	console.log("client connected...");

	client.emit('messages', {data: 'hello, sam'});
});

// Server starts listening on port 3000.
server = server.listen(3000, function() {

	host = server.address().address,
  port = server.address().port;

  	// Logs a message to let dev know we're up and running.
  	console.log('Example app listening at http://%s:%s', host, port);
});

// Export the server for testing
module.exports = server;