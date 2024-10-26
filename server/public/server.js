"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const hostname = '127.0.0.1';
const port = 3000;
const server = (0, node_http_1.createServer)((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server Started');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
