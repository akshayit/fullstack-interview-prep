# TypeScript

## Concept Explanation

TypeScript adds static types to JavaScript so teams catch mistakes before runtime.

## Beginner Explanation

In a payment screen, TypeScript helps prevent calling `chargeCard(amount)` with a string like `"499"` when the API expects paise as a number.

## Realistic Analogy

For a Zomato order, an order can be `placed`, `accepted`, `picked_up`, `delivered`, or `cancelled`. TypeScript can force code to handle every state.

## Interview Answer

TypeScript improves maintainability by describing data contracts, function inputs, API responses, and component props. It does not replace runtime validation because external data can still be invalid.

## Code Example

```ts
type OrderStatus = "placed" | "accepted" | "picked_up" | "delivered" | "cancelled";

type Order = {
  id: string;
  restaurantName: string;
  status: OrderStatus;
  totalInPaise: number;
};

function getStatusLabel(order: Order): string {
  switch (order.status) {
    case "placed":
      return "Waiting for restaurant";
    case "accepted":
      return "Food is being prepared";
    case "picked_up":
      return "Delivery partner is on the way";
    case "delivered":
      return "Delivered";
    case "cancelled":
      return "Cancelled";
  }
}
```

## Pitfalls

- Using `any` everywhere.
- Trusting API responses without runtime validation.
- Creating types that do not match backend contracts.

## Debugging Tips

- Check generated API types.
- Enable strict mode.
- Make impossible states unrepresentable with unions.

## Follow-up Questions

1. What is a union type?
2. What is the difference between `type` and `interface`?
3. Why is `unknown` safer than `any`?
4. How do you type Amazon checkout form state?
5. Why did production fail even though TypeScript passed?
6. How do you share types between frontend and backend?

## Best Practices

- Enable `strict`.
- Type API boundaries.
- Use discriminated unions for state machines.

## Performance Concerns

TypeScript does not add runtime cost after compilation, but extremely complex types can slow developer builds.

## Security Concerns

Types are not validation. Validate request and response data with runtime schemas for payments, auth, and admin actions.

