# Backend Production Patterns

## File Uploads

Use signed URLs for large files. Store metadata in your database and binary content in object storage.

Product example: LinkedIn resume upload should validate size, type, owner, virus scan status, and access permissions.

## Redis Caching

Use Redis for hot reads, counters, sessions, rate limits, and short-lived coordination.

Product example: Amazon product detail pages can cache product summaries, but checkout price must be revalidated from trusted backend data.

## Queues and Message Brokers

Queues move slow work out of request-response flow.

Product example: after an order is placed, email, invoice generation, analytics, and seller notification can run asynchronously.

```js
await queue.publish("order.created", {
  orderId: order.id,
  userId: order.userId
});
```

## Cron Jobs

Cron jobs run scheduled work such as retrying failed payments, expiring carts, cleaning old sessions, and sending daily reports.

## Payments

Payment systems need idempotency, provider webhooks, reconciliation, audit logs, and secure metadata handling.

## Email and Notifications

Use templates, user preferences, retries, provider failover, and idempotency keys.

## API Versioning

Use URL versioning like `/v1/orders` for public APIs or header versioning for controlled clients. Avoid breaking existing clients without migration.

## API Security

- Validate all inputs.
- Rate limit sensitive routes.
- Enforce server-side authorization.
- Use CORS carefully.
- Avoid logging secrets.
- Return safe errors.

## Logging and Monitoring

Log request ID, user ID when safe, route, status, latency, dependency errors, and business IDs like order ID or payment ID.

Monitor:

- Request rate.
- Error rate.
- p95 and p99 latency.
- DB pool usage.
- Queue depth.
- Cache hit ratio.
- Payment success rate.

## Interview Follow-ups

1. How do you make queue consumers idempotent?
2. How do you avoid cache stampede?
3. How do you design retry policy for payment webhooks?
4. How do you debug a notification delay?
5. How do you monitor a microservice?

