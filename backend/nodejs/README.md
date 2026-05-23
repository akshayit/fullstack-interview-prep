# Node.js

## Concept Explanation

Node.js runs JavaScript on the server using an event-driven, non-blocking I/O model.

## Beginner Explanation

Node.js can handle many API requests because it does not wait doing nothing while the database or network responds.

## Realistic Analogy

In a food delivery app, one restaurant manager can take many orders because they hand work to kitchen staff instead of cooking each order alone. Node.js hands I/O work to the system and continues serving other requests.

## Interview Answer

Node.js is good for I/O-heavy systems like APIs, chat, notifications, and dashboards. CPU-heavy work should be moved to workers, queues, or separate services.

## Code Example

```js
import http from "node:http";

const server = http.createServer(async (req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }

  res.writeHead(404);
  res.end();
});

server.listen(3000);
```

## Pitfalls

- Blocking the event loop with CPU-heavy loops.
- Not handling promise rejections.
- Creating memory leaks with global arrays or unclosed timers.

## Debugging Tips

- Check event loop lag.
- Capture heap snapshots for memory growth.
- Profile CPU during spikes.

## Follow-up Questions

1. What is non-blocking I/O?
2. What is the event loop in Node.js?
3. When should you use worker threads?
4. Why is invoice PDF generation slowing checkout APIs?
5. How do you debug Node.js memory leaks?
6. How would you structure a Node.js service for notifications?

## Best Practices

- Keep request handlers small.
- Use structured logging.
- Validate input at boundaries.
- Move slow jobs to queues.

## Performance Concerns

Track event loop lag, heap usage, CPU, p95/p99 latency, DB pool saturation, and queue depth.

## Security Concerns

Validate input, avoid leaking stack traces, protect secrets, and keep dependencies updated.

