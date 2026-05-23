# Microservices Basics

## Concept Explanation

Microservices split a system into independently deployable services around business capabilities.

## Beginner Explanation

In e-commerce, cart, checkout, payment, inventory, shipment, and notification can be separate services when the product becomes large enough.

## Realistic Analogy

Amazon checkout involves many teams. Payment, inventory, coupons, delivery, and email must work together but own different responsibilities.

## Interview Answer

Microservices help independent scaling and team ownership, but add network failures, distributed transactions, observability needs, deployment complexity, and data consistency challenges.

## Code Example

```js
async function placeOrder(command) {
  const order = await orderRepo.createPending(command);

  await eventBus.publish("order.created", {
    orderId: order.id,
    userId: command.userId,
    items: command.items
  });

  return order;
}
```

## Pitfalls

- Splitting too early.
- Sharing one database between all services.
- Ignoring retries and idempotency.
- No tracing across services.

## Debugging Tips

- Use correlation IDs.
- Trace request path across services.
- Check queue lag and dead-letter queues.

## Follow-up Questions

1. What is a microservice?
2. Monolith vs microservices?
3. What is eventual consistency?
4. Why did payment succeed but order stay pending?
5. How do you debug a distributed checkout failure?
6. How would you split an e-commerce platform?

## Best Practices

- Start modular, split when pain is real.
- Own data per service.
- Use events for async workflows.
- Add observability before scaling complexity.

## Performance Concerns

Network hops add latency. Avoid chatty service calls, batch where sensible, and cache read models.

## Security Concerns

Use service authentication, least privilege, audit logs, and do not trust internal traffic blindly.

