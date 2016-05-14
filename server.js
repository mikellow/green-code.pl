var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(4000, 'localhost');
console.log('server [greencode] started at : localhost:4000');

/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(8080, 'APP_PRIVATE_IP_ADDRESS');
console.log('Server running at http://APP_PRIVATE_IP_ADDRESS:8080/');
*/
