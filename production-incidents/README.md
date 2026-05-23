# Production Incident Case Studies

## Incident 1: Amazon-style Checkout Double Charge

### Impact

Some users were charged twice after retrying checkout during a payment provider timeout.

### Root Cause

The payment API did not enforce idempotency keys. The frontend retried the request, and the backend created a second payment attempt.

### Fix

- Added `idempotency_key` unique constraint.
- Returned existing payment when the same key was reused.
- Added webhook reconciliation.
- Added alert on duplicate provider references.

### Interview Lesson

Retries are necessary, but every retryable write must be idempotent.

## Incident 2: Instagram-style Feed Slow Scroll

### Impact

Users saw janky scrolling after loading many posts.

### Root Cause

The frontend rendered hundreds of feed cards, each with images, comments, and event handlers.

### Fix

- Added list virtualization.
- Lazy-loaded comments.
- Used responsive images.
- Removed unstable props causing rerenders.

### Interview Lesson

Frontend performance is not only API speed. DOM size, image weight, and rerenders matter.

## Incident 3: Zomato-style Live Tracking Stale Location

### Impact

Customers saw delivery partner location stuck for several minutes.

### Root Cause

Redis hot key latency increased and WebSocket reconnects caused message drops.

### Fix

- Added location update sequence numbers.
- Replayed latest location on reconnect.
- Reduced update frequency for unchanged locations.
- Added stale-location alert.

### Interview Lesson

Real-time systems need reconnect logic, deduplication, and freshness monitoring.

## Incident 4: LinkedIn-style Duplicate Notifications

### Impact

Users received duplicate notification emails.

### Root Cause

Queue workers sent emails and crashed before marking jobs complete.

### Fix

- Added idempotency key per notification.
- Added unique send log.
- Made worker safe to retry.
- Added dead-letter queue.

### Interview Lesson

At-least-once delivery means your consumer must be idempotent.

