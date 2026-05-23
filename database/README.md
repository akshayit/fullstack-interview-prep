# Database Interview Preparation

Databases store the truth of your product. Interviews test whether you can model data, query efficiently, protect consistency, and scale carefully.

## Learning Path

1. SQL basics: tables, joins, grouping, constraints.
2. MySQL and PostgreSQL differences.
3. MongoDB document modeling.
4. Redis for cache, counters, locks, queues, and rate limits.
5. Indexing and query optimization.
6. Transactions, ACID, isolation levels.
7. CAP theorem, replication, sharding.
8. Schema design for product workflows.
9. Performance tuning and production debugging.

## 100 Question Sets

- [MySQL 100 interview questions](mysql/100-interview-questions.md)

## Concept Explanation

SQL databases are strong for relational data and transactions. MongoDB is useful for flexible documents. Redis is useful for fast in-memory access, caching, counters, locks, and ephemeral data.

## Beginner Explanation

Amazon orders need reliable transactions because payment, order, and inventory updates must not become inconsistent.

## Realistic Analogy

Instagram feed storage may use multiple systems: PostgreSQL for users, Redis for counters and feed cache, object storage for media, and search index for discovery.

## Interview Answer

Choose the database based on access patterns, consistency needs, query complexity, scale, operational maturity, and team experience. Schema design starts from product queries, not from random entities.

## Production Example

```sql
CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('created', 'paid', 'packed', 'shipped', 'delivered', 'cancelled')),
  total_in_paise INTEGER NOT NULL CHECK (total_in_paise >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_orders_user_created_at ON orders (user_id, created_at DESC);
```

## Indexing Example

If the order history page runs:

```sql
SELECT * FROM orders
WHERE user_id = 42
ORDER BY created_at DESC
LIMIT 20;
```

The `(user_id, created_at DESC)` index helps the database find that user's latest orders without scanning the whole table.

## Transactions Example

```sql
BEGIN;

UPDATE inventory
SET available = available - 1
WHERE product_id = 10 AND available > 0;

INSERT INTO orders (user_id, status, total_in_paise)
VALUES (42, 'created', 99900);

COMMIT;
```

## Pitfalls

- Adding indexes blindly.
- Missing foreign keys where consistency matters.
- Designing MongoDB like SQL tables.
- Not checking query plans.
- Ignoring migration rollback strategy.

## Debugging Tips

- Run `EXPLAIN ANALYZE`.
- Check slow query logs.
- Compare estimated vs actual rows.
- Inspect locks and transaction duration.
- Check cache hit ratio.

## Question Bank

Use this answer pattern: explain the data problem, show a tiny query/schema, then discuss scale or correctness.

| Question | Practical Explanation | Basic Example |
| --- | --- | --- |
| What is an index? | A lookup structure that helps DB find rows faster. | `CREATE INDEX idx_orders_user ON orders(user_id);` |
| What is a transaction? | A group of queries that succeed or fail together. | Create order and reduce inventory together. |
| What is a foreign key? | A rule that keeps relationships valid. | `orders.user_id` must exist in `users.id`. |
| What is normalization? | Split repeated data into related tables. | Store customer once, not inside every order row. |
| What is replication? | Copy data to another DB server. | Read order history from replica, write checkout to primary. |
| What is sharding? | Split data across databases. | Chat messages can be sharded by `conversation_id`. |
| What is Redis? | Fast in-memory store. | Cache latest delivery location for tracking. |
| What is query optimization? | Make slow queries scan less data. | Add composite index for `user_id, created_at`. |

### Basic

1. What is a primary key?
2. What is a foreign key?
3. SQL vs NoSQL?
4. What is Redis?

### Intermediate

1. What is an index?
2. What is a transaction?
3. What is normalization?
4. How do you model order items?

### Advanced

1. What are isolation levels?
2. What is replication lag?
3. What is sharding?
4. What is the CAP theorem?

### Scenario-based

1. Amazon order history is slow for power users. What index do you add?
2. Payment succeeded but order row is missing. What happened?
3. LinkedIn feed count is wrong after high traffic. How do you fix it?

### Production Debugging

1. CPU is high on PostgreSQL.
2. Queries are waiting on locks.
3. Redis memory is evicting hot keys.

### Architecture

1. How would you design schema for e-commerce checkout?
2. How would you design chat message storage?
3. How would you shard a notification table?

### Coding Exercises

1. Write SQL for latest order per user.
2. Design indexes for product search filters.
3. Implement Redis rate limiting.

### Common Mistakes

- Using offset pagination for huge tables.
- Forgetting unique constraints.
- Storing money in floating point.
- Not testing migrations on production-like data.

## Best Practices

- Design from read and write patterns.
- Add constraints for critical invariants.
- Measure before adding indexes.
- Keep migrations reversible where possible.

## Performance Concerns

Track query latency, rows scanned, index usage, lock waits, replication lag, connection pool saturation, and cache hit ratio.

## Security Concerns

Use parameterized queries, least privilege DB users, encryption at rest, backups, audit logs, and PII masking.
