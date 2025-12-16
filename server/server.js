const WebSocket = require("ws");

const PORT = process.env.PORT || 8080;
const wss = new WebSocket.Server({ port: PORT });

let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);

  ws.on("message", (message) => {
    clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  ws.on("close", () => {
    clients = clients.filter(c => c !== ws);
  });
});

console.log("WebSocket server running");

