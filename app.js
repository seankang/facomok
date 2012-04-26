var http = require("http");

var port = process.env.PORT || 3000;

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("facomok");
  response.end();
}).listen(port);
