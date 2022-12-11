## WebSocket Server in HTTP

Run the WebSocket server using `npm start`
Now, WebSocket server is running on port 8080.

## WebSocket Client

Go to any chrome tab and create websocket client using:
`let ws = new WebSocket("ws://localhost:8080")`

Client can recieve message by using:
`ws.onmessage = (message) => console.log(message.data)`

Client can send message by using:
`ws.send("Hi")`
