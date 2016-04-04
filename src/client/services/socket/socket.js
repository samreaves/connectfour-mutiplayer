angular.module('connectfour.socket', [])

// Service to interact with the socket library
.factory('socket', function (socketFactory) {
    var myIoSocket = io.connect('http://localhost:3000');

    var socket = socketFactory({
        ioSocket: myIoSocket
    });

    return socket;
});