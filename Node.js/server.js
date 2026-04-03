const http = require('http');
const server = http.createServer(function(req, res) {
if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p>This is Home Page - gcs230180</p></body></html>');

    res.end();

}
else if (req.url === '/student') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p>This is Student Page - gcs230180</p></body></html>');
    res.end();
}
else if (req.url === '/admin') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<html><body><p>This is Admin Page - gcs230180</p></body></html>');
    res.end();
}
else if (req.url === '/data') { 
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify({ message: 'Hello World JSON - gcs230180' }));
    res.end();
}
else 
    res.end('Page not found');
});
server.listen(8000);
console.log('Server is running on port 8000');

// Le Nguyen Huu Phuoc - gcs230180