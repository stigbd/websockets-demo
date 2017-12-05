"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const app = express();
// Initialize a simple http server
const server = http.createServer(app);
// Initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
    // Connection is up, let's add a simple event
    ws.on('message', (message) => {
        // Log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });
    // Send immediately a feedback to the incoming Connection
    ws.send('Hi there, I am a WebSocket server');
});
// Start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});
//# sourceMappingURL=server.js.map