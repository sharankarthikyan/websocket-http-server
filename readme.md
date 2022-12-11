## WebSocket Server in HTTP

Run the WebSocket server using `ode index.js 1111 & node index.js 2222 & node index.js 3333 & node index.js 4444`
Now, we have 4 WebSocket server is running on port 1111, 2222, 3333, 4444.

## Run NGINX + Layer 7 Proxy

Pre-requisites: make sure you have installed nginx in your system.
Run nginx by using the below command, make sure to specify your path to config file.
`nginx -c /Users/sharan/Desktop/workplace/Git/http-websocket-nginx/ws.cfg`

## WebSocket Client

Go to any chrome tab and create websocket client using:
`let ws = new WebSocket("ws://localhost/wsapp")` or `let ws = new WebSocket("ws://localhost/wschat")`

Client can recieve message by using:
`ws.onmessage = (message) => console.log(message.data)`

Client can send message by using:
`ws.send("Hi")`
