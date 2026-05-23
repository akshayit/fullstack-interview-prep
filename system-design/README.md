# System Design Interview Preparation

System design interviews test how you turn vague product requirements into reliable architecture.

## How To Answer

1. Clarify the problem.
2. List functional requirements.
3. List non-functional requirements.
4. Estimate scale.
5. Draw high-level design.
6. Define APIs.
7. Design database schema.
8. Explain scaling, bottlenecks, tradeoffs, security, and monitoring.

## Designs Included

- [URL shortener](url-shortener.md)
- [Chat application](chat-application.md)
- [WhatsApp clone](whatsapp-clone.md)
- [Notification service](notification-service.md)
- [File upload service](file-upload-service.md)
- [E-commerce architecture](ecommerce-architecture.md)
- [Payment service](payment-service.md)
- [Search system](search-system.md)
- [Rate limiter](rate-limiter.md)
- [API gateway](api-gateway.md)
- [Real-time tracking system](real-time-tracking-system.md)

## Architecture Cheat Sheet

| Need | Common Choice | Interview Tradeoff |
| --- | --- | --- |
| Fast reads | Redis, CDN, read replicas | Stale data and invalidation complexity |
| Async work | Queue or message broker | Eventual consistency |
| Search | Elasticsearch/OpenSearch | Extra indexing pipeline |
| Real-time updates | WebSocket | Connection scaling |
| File delivery | S3 plus CDN | Object permissions and cache invalidation |
| Payments | Idempotency plus webhook reconciliation | More state management |
| Global scale | Sharding and regional replication | Operational complexity |

