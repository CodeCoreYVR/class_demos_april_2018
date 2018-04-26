const net = require('net');

const server = net.createServer((socket) => {
  // when the server receives data it will call the anonymous function we
  // provided as the callback function. The received data will come to us in
  // the first argument which is `receivedData` in this case
  socket.on('data', (receivedData) => {
    console.log(`data received from client ${receivedData}`);
    socket.write('Thanks for sending request over');
  });
});


server.listen(5000, '127.0.0.1');
console.log('server is running and listening on port 5000');
