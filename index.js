const http = require('http');

const uuid = process.env.UUID || 'default-uuid';

const server = http.createServer((req, res) => {
  res.end(`V2Ray Server Running. UUID: ${uuid}`);
});

server.listen(16823, () => {
  console.log('V2Ray server started on port 16823');
});
