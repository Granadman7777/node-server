const http = require('http');
const fs = require('fs/promises')

const PORT = 3000;

const requestListener = (req, res) => {
  const {url} = req;

  if(url === '/index.html' ) {
    fs.readFile('./vievs/index.html', 'utf-8') 
    .then((data) => {
        res.end(data)
    })
  } else {
    res.statusCode = 404;
    fs.readFile('./vievs/error.html', 'utf-8') 
    .then((data) => {
        res.end(data)
    })
  }

   res.statusCode = 404;
   res.end('HELLO SERVER');
}

const server = http.createServer(requestListener);

server.listen(PORT);