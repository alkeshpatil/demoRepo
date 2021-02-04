const http = require('http');
const fs =require('fs')
const fileContent = fs.readFileSync('index.html')

const port = 5000;

const server = http.createServer((req, res) => {
 res.writeHead(200 , {'Content-type':'text/html'});
 res.end(fileContent)
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});