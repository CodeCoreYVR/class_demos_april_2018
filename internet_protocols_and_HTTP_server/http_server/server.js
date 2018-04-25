const http = require('http');
const url = require('url');

const server = http.createServer( (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });

  // When we receive a url with HTTP GET Params (part of the URL) such as:
  // http://localhost:5001?name=john&age=10
  // then `params` will be a javascript object that captures those params like:
  // params -> { name: 'john', age: '10' }
  const params = url.parse(request.url, true).query;

  response.write(`<!DOCTYPE html>
                  <html>
                  <head>
                    <title>My first Node.js server</title>
                  </head>
                  <body>
                    <h1>Welcome ${params.name} to my first Nose.js HTML page</h1>
                  </body>
                  </html>
                `);
  response.end();
});

server.listen(5001);
console.log('server is running on port 5001');
