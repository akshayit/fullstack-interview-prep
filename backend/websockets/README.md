# WebSockets

## Concept Explanation

WebSockets keep a persistent connection open so server and client can send messages in real time.

## Beginner Explanation

WhatsApp Web uses real-time communication so new messages appear without refreshing the page.

## Realistic Analogy

Zomato order tracking needs live delivery partner location updates. Polling every second wastes network and battery; WebSockets can push updates as they happen.

## Interview Answer

Use WebSockets for low-latency bidirectional updates like chat, presence, live tracking, trading dashboards, and multiplayer interactions. Plan reconnects, heartbeats, authentication, backpressure, and horizontal scaling with pub/sub.

## Code Example

```js
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (socket, request) => {
  socket.isAlive = true;

  socket.on("pong", () => {
    socket.isAlive = true;
  });

  socket.on("message", (raw) => {
    const event = JSON.parse(raw);
    if (event.type === "chat.message") {
      broadcast(JSON.stringify({ type: "chat.message", payload: event.payload }));
    }
  });
});

function broadcast(message) {
  for (const client of wss.clients) {
    if (client.readyState === client.OPEN) client.send(message);
  }
}
```

## Pitfalls

- Not handling reconnect and duplicate events.
- Keeping connections without heartbeat cleanup.
- Broadcasting to users who are not authorized for a room.

## Debugging Tips

- Log connection count per server.
- Track reconnect rate.
- Add message IDs for deduplication.

## Follow-up Questions

1. What is WebSocket?
2. WebSocket vs polling?
3. How do you scale WebSockets?
4. Why are WhatsApp messages duplicated after reconnect?
5. How do you debug missing live tracking updates?
6. How would you design rooms and presence?

## Best Practices

- Authenticate connection setup.
- Use heartbeats.
- Make events idempotent.
- Use Redis pub/sub or a broker for multi-node fanout.

## Performance Concerns

Large fanout can overload servers. Track connection count, outbound messages, slow clients, and memory.

## Security Concerns

Validate every event, check room permissions, rate limit messages, and avoid trusting client-sent user IDs.

