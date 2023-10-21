const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Set the content type to HTML
  res.setHeader('Content-Type', 'text/html');

  // Read the contents of the HTML file
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      // If there was an error reading the file, return a 500 error
      res.statusCode = 500;
      res.end(`Error loading index.html: ${err}`);
    } else {
      // Otherwise, return the contents of the file
      res.statusCode = 200;
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});