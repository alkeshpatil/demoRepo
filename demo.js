const http = require('http');
const fs =require('fs')
const fileContent = fs.readFileSync('index.html')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
 res.writeHead(200 , {'Content-type':'text/html'});
 res.end(fileContent)
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});