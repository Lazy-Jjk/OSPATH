const http = require('http');   // Fixed 'const http require' to 'const http = require'
const os = require('os');       // Fixed 'const os require' to 'const os = require'
const path = require('path');   // Fixed 'const path require' to 'const path = require'
const EventEmitter = require('events');  // Fixed the EventEmitter import

const eventEmitter = new EventEmitter(); // Fixed 'new EventEmitter()'

const server = http.createServer((req, res) => {  // Fixed syntax error here
  res.writeHead(200, { 'Content-Type': 'text/plain' });  // Fixed 'writeHead' and corrected syntax
  res.end("Hello, World!\n");   // Fixed incorrect quotes and syntax
});

const port = 3000;  // Fixed 'const port 3000' to 'const port = 3000'
const hostname = '127.0.0.1';  // Fixed syntax error in hostname string

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);  // Fixed template string syntax
});

console.log('OS Type:', os.type());  // Fixed '05 Type:' to 'OS Type:'
console.log('OS Platform:', os.platform());  // Fixed '05 Platform:' to 'OS Platform:'
console.log('OS Architecture:', os.arch());  // Fixed '05 Architecture:' to 'OS Architecture:'
console.log('CPU Cores:', os.cpus().length);  // Fixed 'CPU Cores' and added correct function call
console.log('Current Working Directory:', process.cwd());  // Fixed 'Current Working Directory'

const joinedPath = path.join(__dirname, "public", "images");  // Fixed incorrect 'joined Path' to 'joinedPath'
console.log("Joined Path:", joinedPath);  // Fixed 'Joined Path:' to 'Joined Path:'

eventEmitter.on('customEvent', (data) => {  // Fixed 'customEvent' syntax
  console.log("Custom Event Triggered:", data);  // Fixed 'Custon' to 'Custom'
});

eventEmitter.emit('customEvent', "Hello from custom event!");  // Fixed emit syntax and string quotes