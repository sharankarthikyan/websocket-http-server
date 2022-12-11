const http = require("http");
const WebSocketServer = require("websocket").server;
const httpServer = http.createServer();
const websocketServer = new WebSocketServer({ httpServer });

const PORT = 8080;

httpServer.listen(PORT, () => console.log(`listening on ${PORT}`));

let connection = null;
websocketServer.on("request", (request) => {
  console.log("asd");
  connection = request.accept(null, request.origin);

  connection.on("message", (data) => {
    console.log(`Hey I received a message ${data.utf8Data}`);
    connection.send(
      `Hey client! Received your message ${data.utf8Data} on ${PORT}`
    );
  });
});
