const http = require("http");
const os = require("os");
const greeting = require("./personalmodule");

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});

  const userName = os.userInfo().username;

  response.write(`Date of request: ${greeting.date}<br>`);
  response.write(greeting.showMessage(userName));

  response.end();
}).listen(8000);

console.log("Server is running on port :8000")
