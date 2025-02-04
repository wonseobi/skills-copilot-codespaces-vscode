// Create web server
// Create a web server that listens on port 3000 and serves a file called comments.html. Use the fs module to read the file and the http module to create the server.

const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('comments.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end('404 Not Found');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(3000);