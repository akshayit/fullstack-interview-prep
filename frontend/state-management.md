# Redux and Zustand

## Concept Explanation

State management decides where product data lives and how UI updates when that data changes.

## Beginner Explanation

In Amazon checkout, address, cart items, coupon, payment method, and order summary must stay consistent across multiple components.

## Realistic Analogy

Redux is like a central office with strict paperwork. Zustand is like a smaller team board that is easier to update but still shared.

## Interview Answer

Use local state for component-only UI, server-state tools for API data, Redux when large teams need predictable global state and tooling, and Zustand when you need simple shared client state with less boilerplate.

## Code Sample

```ts
import { create } from "zustand";

type CartStore = {
  items: Array<{ productId: string; quantity: number }>;
  addItem: (productId: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (productId) =>
    set((state) => ({
      items: [...state.items, { productId, quantity: 1 }]
    }))
}));
```

## Pitfalls

- Putting all API data into global state.
- Not normalizing complex Redux data.
- Letting every component subscribe to the whole store.

## Debugging Tips

- Inspect which component subscribes to which state.
- Check stale closures in actions.
- Use Redux DevTools for action history.

## Follow-up Questions

1. When do you need global state?
2. Redux vs Zustand?
3. What is normalized state?
4. Why does cart count rerender the whole page?
5. How do you debug stale checkout state?
6. How would you design state for an admin dashboard?

## Best Practices

- Keep server state separate from UI state.
- Subscribe to the smallest useful slice.
- Keep actions predictable.

## Performance Concerns

Large subscriptions cause unnecessary rerenders. Use selectors and memoization.

## Security Concerns

Do not store secrets, raw tokens, or sensitive payment data in client state.

