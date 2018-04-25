const net = require('net');

const client = net.Socket();

client.connect(5000, '127.0.0.1', () => {
  client.write('Hello server');
});

client.on('data', (data) => {
  console.log(`data received from server ${data}`);
  process.exit();
});
