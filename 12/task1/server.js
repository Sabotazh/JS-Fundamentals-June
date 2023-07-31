const http = require("http");
const os = require("os");
const path = require("path");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write("<h2>System information</h2>");
  response.write("Current user name: " + os.userInfo().username);
  response.write("<br>");
  response.write("OS type: " + os.type());
  response.write("<br>");
  response.write("System work time: " + (os.uptime()/60).toFixed(2) + " minutes");
  response.write("<br>");
  response.write("Current work directory: " + path.dirname(__filename));
  response.write("<br>");
  response.end("Server file name: " + path.basename(__filename));
}).listen(5000);

console.log("Server is running on port :5000")
