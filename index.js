const http = require('http');

const PORT = 3000;

const requestListener = (req, res) => {
   //const {url, method} = req;
   //console.log(url, method);
   res.statusCode = 404;
   res.end('HELLO SERVER');
}

const server = http.createServer(requestListener);

server.listen(PORT);