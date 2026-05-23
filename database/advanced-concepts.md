# Advanced Database Concepts

## ACID

ACID means atomicity, consistency, isolation, and durability.

Interview answer: ACID helps ensure critical workflows like payments and inventory updates do not leave the system half-updated.

## CAP Theorem

CAP says that during a network partition, a distributed system must choose between consistency and availability.

Product example: WhatsApp may accept messages locally during network instability and sync later, while banking balances usually prefer stronger consistency.

## Replication

Replication copies data from primary to replicas.

Use case: Amazon order history reads can go to replicas, but checkout writes should go to primary.

Pitfall: replication lag can show stale data.

## Sharding

Sharding splits data across multiple databases.

Use case: chat messages can be sharded by conversation ID.

Pitfall: cross-shard queries and rebalancing are hard.

## Query Optimization

Steps:

1. Identify slow query.
2. Run query plan.
3. Check indexes and row estimates.
4. Reduce scanned rows.
5. Avoid unnecessary joins.
6. Measure again.

## Schema Design

Start from access patterns:

- What does the page need to show?
- How often is it read?
- How often is it written?
- What consistency is required?
- What is the growth pattern?

## Performance Tuning Checklist

- Add useful composite indexes.
- Use cursor pagination.
- Keep transactions short.
- Archive old data.
- Tune connection pools.
- Monitor locks and replication lag.

## Security Checklist

- Parameterized queries.
- Least privilege DB users.
- Encrypted backups.
- PII masking.
- Audit logs for admin reads and writes.

