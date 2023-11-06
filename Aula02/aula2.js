const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'})
    res.write('E o pix, pai. Nada ainda?');
    res.end();
}).listen('1337');