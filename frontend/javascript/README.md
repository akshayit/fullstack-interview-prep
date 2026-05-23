# JavaScript

## Concept Explanation

JavaScript powers browser behavior, API calls, state changes, async workflows, and user interactions.

## Beginner Explanation

On WhatsApp Web, JavaScript sends a message, updates the UI optimistically, listens for delivery status, and handles reconnects.

## Realistic Analogy

In Amazon checkout, JavaScript validates the address, calculates shipping, applies coupons, and updates payment state without reloading the page.

## Interview Answer

JavaScript is single-threaded in the main execution context, but it handles async work using the event loop, task queues, microtasks, browser APIs, and promises.

## Code Example

```js
async function sendMessage({ conversationId, text, api }) {
  const tempId = crypto.randomUUID();
  const optimisticMessage = { id: tempId, text, status: "sending" };

  try {
    const saved = await api.post(`/conversations/${conversationId}/messages`, {
      clientId: tempId,
      text
    });
    return { ...saved, status: "sent" };
  } catch (error) {
    return { ...optimisticMessage, status: "failed", error: error.message };
  }
}
```

## Pitfalls

- Forgetting to handle rejected promises.
- Mutating shared state accidentally.
- Blocking the main thread with heavy loops.

## Debugging Tips

- Use performance profiling for long tasks.
- Check network waterfall for slow calls.
- Reproduce race conditions with slow 3G throttling.

## Follow-up Questions

1. What is closure?
2. What is the event loop?
3. What is the difference between microtasks and macrotasks?
4. How do you prevent duplicate WhatsApp messages?
5. Why does the UI freeze during CSV export?
6. How would you design a reusable API client?

## Best Practices

- Prefer small pure functions for business logic.
- Use `AbortController` for cancellable requests.
- Handle loading, error, retry, and empty states.

## Performance Concerns

Heavy JSON parsing, large loops, and image processing can block user input. Move expensive work to a web worker when needed.

## Security Concerns

Avoid `eval`, sanitize rendered HTML, keep tokens out of localStorage when possible, and validate all server responses.

