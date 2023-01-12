const http = require('http');

const PORT = 3000;

const requestListener = (req, res) => {
   // console.log('Request is Here')
   const {url, method} = req;
   console.log(url, method);
}

const server = http.createServer(requestListener);

server.listen(PORT);