# Frontend Interview Preparation

Frontend interviews test whether you can build UI that is correct, fast, accessible, secure, and maintainable.

## Learning Path

1. HTML semantics and forms.
2. CSS layout, responsive design, and accessibility.
3. JavaScript fundamentals, event loop, DOM, async programming.
4. TypeScript for reliable product code.
5. React rendering, state, effects, reconciliation, hooks.
6. Next.js rendering: CSR, SSR, SSG, ISR.
7. State management with Redux and Zustand.
8. Authentication, authorization, caching, service workers.
9. Performance, memory leaks, browser rendering, web workers.
10. Testing with Jest, Cypress, and Playwright.

## 100 Question Sets

- [JavaScript 100 interview questions](javascript/100-interview-questions.md)
- [TypeScript 100 interview questions](typescript/100-interview-questions.md)
- [React 100 interview questions](react/100-interview-questions.md)

## Real Product Lens

- Instagram feed: infinite scroll, image loading, optimistic likes.
- WhatsApp Web: real-time messages, unread counts, connection state.
- Amazon checkout: forms, validation, payments, address selection.
- Netflix: streaming UI, skeleton loading, personalization, caching.
- LinkedIn feed: ranking, pagination, ads, reactions, comments.

## Interview Question Bank

Use this style while answering: first explain in simple words, then give a small product example, then mention one production concern.

| Question | Practical Explanation | Basic Example |
| --- | --- | --- |
| What is semantic HTML? | HTML tags should describe meaning, not only layout. | Amazon checkout should use `form`, `label`, and `button`, not clickable `div`s. |
| What is the event loop? | It helps JavaScript handle async work without blocking the UI. | WhatsApp Web can send a message and still let the user type. |
| What is React state? | State is data that changes the UI when updated. | Instagram like button changes from "Like" to "Liked". |
| What is reconciliation? | React compares old UI and new UI to update only what changed. | LinkedIn feed updates one post reaction instead of rebuilding the whole page. |
| What is SSR? | Server creates HTML before sending it to browser. | Amazon product page loads title and price quickly for SEO. |
| What is accessibility? | UI should work for keyboard, screen readers, and all users. | Checkout form must announce validation errors clearly. |
| What is caching? | Store data/assets temporarily to avoid repeated work. | Netflix thumbnails load faster after first visit. |
| What is a memory leak? | App keeps memory it no longer needs. | A WebSocket listener keeps running after leaving chat page. |

### Basic

1. What is semantic HTML and why does it matter?
2. What is the difference between `let`, `const`, and `var`?
3. What are controlled components in React?
4. What is client-side rendering?
5. What is accessibility?

### Intermediate

1. How does the browser render a page?
2. How does React reconciliation work?
3. When would you use Redux instead of local state?
4. How do SSR and SSG differ in Next.js?
5. How do you avoid unnecessary rerenders?

### Advanced

1. How do you debug a memory leak in a React app?
2. How do service workers improve offline support?
3. How do web workers keep the UI responsive?
4. How do you design frontend auth for role-based dashboards?
5. How do you measure and improve Core Web Vitals?

### Scenario-based

1. Instagram feed becomes slow after 200 posts. What do you do?
2. Amazon checkout form loses user input after refresh. How do you fix it?
3. WhatsApp Web shows duplicate messages after reconnect. What is the root cause?
4. Netflix thumbnails load slowly on mobile networks. How do you improve it?

### Production Debugging

1. A React page uses 1 GB memory after 20 minutes. What do you inspect?
2. A Next.js page has stale product prices. Is it ISR, cache, or API?
3. A Cypress test is flaky only in CI. How do you isolate it?

### Architecture

1. How would you structure a large e-commerce admin dashboard?
2. How would you design a frontend permission system?
3. How would you split bundles for a marketplace app?

### Coding Exercises

1. Build a debounced search input.
2. Build optimistic like/unlike for a feed.
3. Build a paginated table with sorting and filters.
4. Build a retryable API client with timeout.

### Common Mistakes

- Fetching data inside components without cancellation.
- Using array index as key for dynamic lists.
- Ignoring loading, error, empty, and permission states.
- Shipping large bundles without measuring.
- Building inaccessible custom controls.
