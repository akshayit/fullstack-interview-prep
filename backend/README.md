# Backend Interview Preparation

Backend interviews test whether you can build APIs that are correct, secure, observable, and scalable.

## Learning Path

1. Node.js runtime, event loop, streams, modules.
2. Express middleware, routing, validation, error handling.
3. REST and GraphQL API design.
4. Authentication: JWT, OAuth, sessions.
5. Authorization: RBAC, ABAC, ownership checks.
6. File uploads, WebSockets, rate limiting, caching.
7. Queues, cron jobs, message brokers, email, notifications.
8. Payments, idempotency, retries, reconciliation.
9. Logging, monitoring, tracing, incidents.
10. Microservices basics and distributed tradeoffs.

## 100 Question Sets

- [Node.js 100 interview questions](nodejs/100-interview-questions.md)

## Interview Question Bank

Use this answer pattern: simple definition, product example, then production risk.

| Question | Practical Explanation | Basic Example |
| --- | --- | --- |
| What is middleware? | Code that runs before the final route handler. | Check auth before creating an Amazon order. |
| What is JWT? | A signed token that proves user identity to APIs. | Mobile app sends JWT in `Authorization` header. |
| What is authorization? | Decides what an authenticated user can access. | Customer can view own order, admin can view all orders. |
| What is rate limiting? | Blocks too many requests from same user/IP/key. | OTP API allows only 5 attempts per minute. |
| What is Redis caching? | Store hot data in memory for fast reads. | Product details page reads cached product summary. |
| What is a queue? | Async work processor for slow or retryable tasks. | Send order email after checkout without blocking user. |
| What is idempotency? | Repeating same request gives same safe result. | Payment retry should not charge twice. |
| What is monitoring? | Metrics and alerts that show production health. | Alert when checkout p99 latency crosses 2 seconds. |

### Basic

1. What is Node.js?
2. What is middleware?
3. What is REST?
4. What is JWT?
5. What is rate limiting?

### Intermediate

1. How does Express error handling work?
2. How do you design pagination?
3. How do you handle file uploads safely?
4. How do queues improve reliability?
5. How do you cache API responses with Redis?

### Advanced

1. How do you make payment APIs idempotent?
2. How do you design an exactly-once-looking notification system?
3. How do you debug high p99 latency?
4. How do microservices communicate safely?
5. How do you handle schema evolution across services?

### Scenario-based

1. WhatsApp messages are delayed during traffic spike. What do you inspect?
2. Amazon checkout charges a user twice. How do you prevent it?
3. Zomato order tracking stops updating for some users. How do you debug it?
4. LinkedIn notification emails are duplicated. What is the fix?

### Production Debugging

1. CPU is high but request count is normal.
2. Redis cache hit ratio dropped suddenly.
3. Payment webhook retries are creating duplicate orders.
4. API logs show many 401s after deployment.

### Architecture

1. How would you design API versioning?
2. How would you split services for e-commerce checkout?
3. How would you design audit logs for admin actions?

### Coding Exercises

1. Build Express error middleware.
2. Build JWT auth middleware.
3. Build rate limiter with Redis.
4. Build idempotency middleware for payments.

### Common Mistakes

- Trusting client user IDs for authorization.
- Missing idempotency for retries.
- Logging secrets or tokens.
- Returning inconsistent error shapes.
- Running slow work inside request-response path.
