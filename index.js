const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response status and headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send a response message
  res.end('Hello, World!\n');
});

// Listen on a specific port and IP address
const port = 3000;

server.listen(port, () => {
  console.log(`Server running at: https://gfhgjkhlgtfhik.6areqm7hmoud.repl.co`);
});