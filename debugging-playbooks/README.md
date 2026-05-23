# Debugging Playbooks

Debugging is not guessing. It is narrowing the problem with evidence.

## Universal Debugging Flow

1. Confirm the user impact.
2. Identify what changed.
3. Reproduce or capture examples.
4. Check logs, metrics, traces, and dashboards.
5. Isolate frontend, backend, database, network, or third-party dependency.
6. Mitigate first if users are affected.
7. Fix root cause.
8. Add tests, alerts, and runbook updates.

## Frontend Optimization Checklist

- Check bundle size by route.
- Check image size, format, and lazy loading.
- Check Core Web Vitals.
- Profile long tasks.
- Use virtualization for long lists.
- Remove unnecessary rerenders.
- Cache static assets safely.
- Test on slow mobile network.

## Backend Scalability Checklist

- Add request IDs and structured logs.
- Track p50, p95, p99 latency.
- Check DB connection pool saturation.
- Add caching for hot reads.
- Move slow work to queues.
- Add rate limits for abuse.
- Make retries idempotent.
- Add load tests for critical endpoints.

## Database Optimization Checklist

- Run `EXPLAIN ANALYZE`.
- Check missing or unused indexes.
- Avoid N+1 queries.
- Use cursor pagination for large data.
- Keep transactions short.
- Monitor locks and replication lag.
- Archive cold data.
- Test migrations on production-like data.

## Playbook: React Memory Leak

### Symptoms

- Browser tab memory keeps increasing.
- App becomes slow after long use.
- Leaving and returning to page makes it worse.

### Likely Causes

- WebSocket not closed.
- Timers not cleared.
- Event listeners not removed.
- Large data retained in closures.

### Debug Steps

1. Reproduce with Chrome memory tools.
2. Take heap snapshots before and after navigation.
3. Search for unmounted component subscriptions.
4. Add cleanup in `useEffect`.

## Playbook: Slow Checkout API

### Symptoms

- Checkout p99 latency spikes.
- Payment timeouts increase.
- Users retry and create duplicate requests.

### Likely Causes

- Payment provider latency.
- Inventory lock contention.
- Missing DB index.
- Synchronous email or invoice generation.

### Debug Steps

1. Split latency by service and dependency.
2. Check DB query plans and locks.
3. Verify idempotency keys.
4. Move non-critical work to queues.

## Playbook: Duplicate Notifications

### Symptoms

- Users receive repeated emails or push messages.
- Queue retry count increases.

### Likely Causes

- Missing idempotency key.
- Worker crashes after send before marking success.
- Provider webhook repeated.

### Debug Steps

1. Check event IDs and notification IDs.
2. Add unique constraint on idempotency key.
3. Make provider sends idempotent when possible.
4. Record send attempt before external call.

