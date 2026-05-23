# Express.js

## Concept Explanation

Express is a minimal web framework for building HTTP APIs with routes and middleware.

## Beginner Explanation

For an Amazon order API, Express receives the request, validates it, checks auth, calls business logic, and returns a response.

## Realistic Analogy

Middleware is like security, reception, and billing desks before an order reaches the warehouse.

## Interview Answer

Express middleware functions run in order. They can read or change the request, send a response, or pass control using `next()`. Error middleware receives four arguments: `err, req, res, next`.

## Code Example

```js
import express from "express";

const app = express();
app.use(express.json());

app.post("/v1/orders", requireAuth, async (req, res, next) => {
  try {
    const order = await createOrder({ userId: req.user.id, items: req.body.items });
    res.status(201).json({ data: order });
  } catch (error) {
    next(error);
  }
});

function requireAuth(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).json({ error: { code: "UNAUTHENTICATED" } });
    return;
  }
  req.user = { id: "user_123" };
  next();
}

app.use((err, req, res, next) => {
  req.log?.error({ err }, "request failed");
  res.status(500).json({ error: { code: "INTERNAL_ERROR" } });
});
```

## Pitfalls

- Forgetting `return` after sending a response.
- Mixing business logic directly into route files.
- Missing centralized error handling.

## Debugging Tips

- Log request ID, user ID, route, status, and latency.
- Check middleware order.
- Reproduce with curl and exact headers.

## Follow-up Questions

1. What is middleware?
2. How do you handle async errors?
3. How do you validate request bodies?
4. Why did checkout return two responses?
5. How do you debug 401 errors after deployment?
6. How would you organize Express routes at scale?

## Best Practices

- Use versioned routes.
- Keep controllers thin.
- Use consistent error responses.
- Validate input before business logic.

## Performance Concerns

Avoid slow synchronous work in middleware. Use compression carefully and cache read-heavy endpoints.

## Security Concerns

Use helmet, rate limits, CORS rules, request size limits, auth middleware, and authorization checks.

