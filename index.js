const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, 'utf-8', (err, content) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading the file');
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
});

const PORT = 3000; // Change this to any port you prefer

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
