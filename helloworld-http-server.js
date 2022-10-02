import http from 'http';
import { myDateTime } from './myfirstmodule.js';

http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('The date and time are currently: ' + myDateTime());
    res.end('Hello World!');
  })
  .listen(8080);
