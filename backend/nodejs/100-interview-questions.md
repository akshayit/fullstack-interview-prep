# Node.js: 100 Interview Questions With Small Examples

Practice in: [OneCompiler JavaScript](https://onecompiler.com/javascript)

1. **What is Node.js?** JS runtime for server apps. Example: `node server.js`
2. **Why use Node.js?** Good for I/O-heavy APIs. Example: chat API, order API.
3. **What is event loop?** Handles async callbacks. Example: DB query returns later.
4. **What is non-blocking I/O?** Node does not wait idle for network/file work. Example: serve users while DB responds.
5. **What blocks Node?** CPU-heavy sync work. Example: `while(true){}`
6. **What is module?** Reusable file. Example: `import express from "express";`
7. **CommonJS vs ESM?** `require` vs `import`. Example: `const fs = require("fs")`
8. **What is npm?** Package manager. Example: `npm install express`
9. **What is package.json?** Project metadata/scripts. Example: `"start":"node server.js"`
10. **What is Express?** Web framework. Example: `app.get("/health", ...)`
11. **What is middleware?** Code before route handler. Example: auth check.
12. **What is route?** URL plus method handler. Example: `POST /v1/orders`
13. **What is controller?** Handles HTTP request. Example: create order controller.
14. **What is service layer?** Business logic. Example: `orderService.create()`
15. **What is repository?** DB access layer. Example: `orderRepo.findById(id)`
16. **What is REST?** Resource-based API style. Example: `GET /orders/1`
17. **What is status code 200?** Success. Example: return order details.
18. **What is 201?** Created. Example: new order created.
19. **What is 400?** Bad request. Example: invalid JSON.
20. **What is 401?** Not authenticated. Example: missing token.
21. **What is 403?** Not authorized. Example: customer refund admin order.
22. **What is 404?** Not found. Example: order ID missing.
23. **What is 409?** Conflict. Example: duplicate idempotency key conflict.
24. **What is 422?** Validation failed. Example: quantity is zero.
25. **What is 500?** Server error. Example: unhandled DB failure.
26. **What is JWT?** Signed auth token. Example: `Authorization: Bearer token`
27. **JWT vs session?** JWT stateless; session stored server-side. Example: web app cookie session.
28. **What is OAuth?** Delegated login/access. Example: login with Google.
29. **What is authorization?** Permission check. Example: only owner sees order.
30. **What is RBAC?** Role-based access control. Example: admin/support/customer.
31. **What is ABAC?** Attribute-based access. Example: support can refund only pending order.
32. **What is input validation?** Check request body. Example: `if(!items.length)`.
33. **What is schema validation?** Validate with schema library. Example: `z.object({email:z.string()})`
34. **What is CORS?** Browser cross-origin permission. Example: allow frontend domain.
35. **What is helmet?** Security headers middleware. Example: `app.use(helmet())`
36. **What is rate limiting?** Limit requests. Example: 5 OTP attempts/minute.
37. **What is Redis?** In-memory data store. Example: cache product details.
38. **What is cache hit?** Data found in cache. Example: skip DB query.
39. **What is cache miss?** Data not in cache. Example: fetch from DB then store.
40. **What is cache invalidation?** Remove stale data. Example: product price changed.
41. **What is queue?** Async job list. Example: send email after order.
42. **What is message broker?** Moves events between services. Example: Kafka/RabbitMQ.
43. **What is cron job?** Scheduled task. Example: expire unpaid carts nightly.
44. **What is WebSocket?** Persistent real-time connection. Example: WhatsApp messages.
45. **What is SSE?** Server pushes one-way events. Example: live order status.
46. **WebSocket vs polling?** Real-time connection vs repeated HTTP. Example: live tracking.
47. **What is file upload?** Receive/store files. Example: resume upload.
48. **How upload large files?** Signed URL to object storage. Example: S3 pre-signed URL.
49. **What is stream?** Process data in chunks. Example: upload video without full memory.
50. **What is Buffer?** Binary data in Node. Example: file chunk.
51. **What is environment variable?** Runtime config. Example: `process.env.DB_URL`
52. **Why not store secrets in code?** Repo leaks credentials. Example: payment API key.
53. **What is logging?** Structured event records. Example: `{orderId, status}`.
54. **What is monitoring?** Metrics and alerts. Example: p99 latency.
55. **What is tracing?** Follow request across services. Example: checkout to payment.
56. **What is request ID?** Correlates logs. Example: `x-request-id`.
57. **What is health check?** Endpoint for service status. Example: `GET /health`.
58. **What is readiness check?** Ready to accept traffic. Example: DB connected.
59. **What is graceful shutdown?** Finish requests before exit. Example: close server on SIGTERM.
60. **What is connection pool?** Reuse DB connections. Example: PostgreSQL pool.
61. **What is N+1 query?** Too many DB calls in loop. Example: fetch posts then author one by one.
62. **How fix N+1?** Batch or join. Example: `WHERE id IN (...)`
63. **What is pagination?** Return data page by page. Example: cursor feed.
64. **Offset vs cursor?** Cursor better for changing feeds. Example: LinkedIn feed.
65. **What is idempotency?** Safe repeat request. Example: payment retry.
66. **What is webhook?** Provider calls your API. Example: payment success callback.
67. **How secure webhook?** Verify signature. Example: HMAC header.
68. **What is retry?** Try failed work again. Example: notification send.
69. **What is dead-letter queue?** Store failed jobs. Example: bad email payload.
70. **What is backpressure?** Slow consumer cannot keep up. Example: WebSocket client slow.
71. **What is memory leak?** Memory grows without release. Example: global array stores requests.
72. **How debug memory leak?** Heap snapshot. Example: compare before/after load.
73. **How debug high CPU?** CPU profile. Example: JSON parsing huge payload.
74. **How debug high latency?** Break down dependencies. Example: DB vs payment provider.
75. **What is API versioning?** Evolve contract safely. Example: `/v1/orders`.
76. **What is GraphQL?** Client selects fields. Example: feed query.
77. **GraphQL N+1?** Resolver calls DB repeatedly. Example: author per post.
78. **What is DataLoader?** Batch/caches resolver loads. Example: load users by IDs.
79. **What is microservice?** Independently deployable service. Example: payment service.
80. **Microservice risk?** Network and consistency complexity. Example: payment success/order pending.
81. **What is monolith?** One deployable app. Example: small marketplace API.
82. **When split service?** Clear scale/team boundary. Example: payments separate for compliance.
83. **What is eventual consistency?** Data syncs later. Example: notification sent after order.
84. **What is transaction?** DB changes succeed/fail together. Example: order and items.
85. **What is SQL injection?** Unsafe query input. Example: use parameterized query.
86. **What is XSS from backend?** Returning unsafe HTML. Example: sanitized comments.
87. **What is CSRF?** Cookie-auth request attack. Example: CSRF token.
88. **What is SSRF?** Server fetches attacker URL. Example: URL preview hits internal IP.
89. **How prevent SSRF?** Block private IPs and validate URLs. Example: upload image by URL.
90. **What is request size limit?** Prevent huge payload abuse. Example: `express.json({limit:"1mb"})`
91. **What is compression?** Reduce response size. Example: gzip JSON.
92. **What is CDN?** Edge cache. Example: product images.
93. **What is object storage?** Store files. Example: invoices and photos.
94. **What is email template?** Reusable message layout. Example: order confirmation.
95. **What is notification preference?** User channel choice. Example: email off, push on.
96. **What is audit log?** Record sensitive actions. Example: admin refund.
97. **What is soft delete?** Mark deleted, keep row. Example: `deleted_at`.
98. **What is feature flag?** Toggle feature. Example: new checkout flow.
99. **Best backend answer?** Correct, secure, observable, scalable APIs. Example: checkout.
100. **Production backend rule?** Never trust client input. Example: recompute price server-side.

