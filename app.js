const http = require("http");
const express = require( "express");
const WebSocket = require( "ws");
const { orders, ordersUpdated } = require('./common');

const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', ws => {
    ws.on('message', m =>  ws.send('входящие не поддерживаю пока :-)'));
    ws.on("error", e => ws.send(e));

    setTimeout(() => ws.send(JSON.stringify(orders)), 3000);
    setTimeout(() => ws.send(JSON.stringify(ordersUpdated)), 10000);
});

server.listen(4100, () => console.log('Server listens to port 4100'))
