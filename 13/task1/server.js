const http = require("http");
const port = 5000;

http.createServer(function (request, response) {
  const currentDate = new Date().toJSON();
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.send(`Your vote is accepted: ${currentDate}`);
  response.end();
}).listen(port);

console.log(`Server is running on port :${port}`)
