var static = require('node-static');
var http = require('http');

var file = new(static.Server)(__dirname);

http.createServer(function (req, res){
  file.serve(req, res);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World!');
}).listen(8000);