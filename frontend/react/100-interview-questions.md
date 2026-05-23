# React: 100 Interview Questions With Small Examples

Practice in: [OneCompiler React](https://onecompiler.com/react)

1. **What is React?** Library for building UI components. Example: `function App(){ return <h1>Hello</h1>; }`
2. **What is component?** Reusable UI function. Example: `<PostCard post={post} />`
3. **What are props?** Data passed to component. Example: `function User({name}){ return <p>{name}</p>; }`
4. **What is state?** Data that changes UI. Example: `const [liked,setLiked]=useState(false);`
5. **Props vs state?** Props come from parent; state belongs inside component. Example: post prop, modal open state.
6. **What is JSX?** HTML-like syntax for UI. Example: `<button>Pay</button>`
7. **What is rendering?** Component returns UI. Example: render order summary.
8. **What is rerender?** UI recalculates after state/props change. Example: like count changes.
9. **What is reconciliation?** React compares old and new tree. Example: update one feed post.
10. **What is virtual DOM?** In-memory UI representation. Example: React decides minimal DOM changes.
11. **What is key?** Stable identity for list item. Example: `posts.map(p => <Post key={p.id} />)`
12. **Why not index key?** Reordered list can reuse wrong state. Example: comments jump to wrong post.
13. **What is conditional rendering?** Show UI by condition. Example: `{isLoading ? <Spinner/> : <Feed/>}`
14. **What is list rendering?** Render array. Example: `orders.map(o => <OrderRow key={o.id}/>)`
15. **What is event handling?** Respond to user action. Example: `<button onClick={pay}>Pay</button>`
16. **What is controlled input?** React state controls input value. Example: `<input value={email} onChange={...}/>`
17. **What is uncontrolled input?** DOM keeps value. Example: `const ref = useRef(null);`
18. **What is lifting state?** Move shared state to parent. Example: cart total shared by cart and header.
19. **What is composition?** Build UI from children. Example: `<Modal><Checkout/></Modal>`
20. **What is prop drilling?** Passing props through many layers. Example: user role to deep menu.
21. **What is context?** Share values without drilling. Example: `AuthContext.Provider`
22. **When use context?** Low-frequency global data. Example: theme, auth user.
23. **Context performance issue?** All consumers may rerender. Example: rapidly changing feed state in context.
24. **What is `useState`?** Local state hook. Example: `useState(0)`
25. **What is `useEffect`?** Run side effects after render. Example: fetch order details.
26. **What is effect cleanup?** Remove subscriptions/timers. Example: `return () => socket.close();`
27. **What is dependency array?** Controls effect rerun. Example: `useEffect(load, [orderId])`
28. **Missing dependency issue?** Stale data or closure. Example: old search query used.
29. **What is `useMemo`?** Cache expensive calculation. Example: filtered product list.
30. **What is `useCallback`?** Cache function reference. Example: stable `onLike` prop.
31. **What is `useRef`?** Persistent mutable value. Example: store timer ID.
32. **Ref vs state?** Ref changes do not rerender. Example: input DOM node.
33. **What is custom hook?** Reusable hook logic. Example: `useDebouncedValue(query)`.
34. **Rules of hooks?** Call hooks at top level. Example: no hook inside `if`.
35. **What is fragment?** Group without DOM node. Example: `<><A/><B/></>`
36. **What is portal?** Render outside parent DOM. Example: modal in `document.body`.
37. **What is error boundary?** Catches render errors. Example: show fallback for broken widget.
38. **Can hooks catch errors?** No, error boundaries catch render lifecycle errors. Example: wrap dashboard.
39. **What is Suspense?** Show fallback while waiting. Example: lazy route loading.
40. **What is lazy loading?** Load component when needed. Example: `lazy(() => import("./Chart"))`
41. **What is code splitting?** Separate bundles. Example: admin chart route loads later.
42. **What is hydration?** Attach React to server HTML. Example: Next.js page becomes interactive.
43. **Hydration mismatch?** Server and client UI differ. Example: `new Date()` rendered differently.
44. **What is React.memo?** Skip rerender if props same. Example: memoized order row.
45. **When avoid memo?** If component is cheap or props always new. Example: inline object prop.
46. **What is stale closure?** Function remembers old value. Example: interval reads old count.
47. **How fix stale closure?** Functional update or ref. Example: `setCount(c => c + 1)`
48. **What is optimistic UI?** Update before server confirms. Example: like post instantly.
49. **How rollback optimistic UI?** Save previous state. Example: restore likes on API failure.
50. **What is server state?** Data from backend. Example: order history.
51. **What is client state?** UI-only state. Example: selected tab.
52. **Why separate server/client state?** They have different caching rules. Example: React Query vs local state.
53. **What is Redux?** Predictable global state store. Example: cart actions.
54. **What is Zustand?** Small global store library. Example: checkout step store.
55. **Redux vs Zustand?** Redux has strict tooling; Zustand is lightweight. Example: enterprise admin vs simple cart.
56. **What is reducer?** State transition function. Example: `(state, action) => nextState`
57. **What is immutability in React?** Create new state objects. Example: `setItems([...items, item])`
58. **Why mutation is bad?** React may not detect changes. Example: `items.push(item)` then no rerender.
59. **What is form validation?** Check user input. Example: email required before signup.
60. **How show API errors?** Store error state. Example: `{error && <p>{error}</p>}`
61. **What are loading states?** UI while waiting. Example: skeleton product card.
62. **What is empty state?** UI when no data. Example: "No orders yet".
63. **What is permission state?** UI based on role. Example: hide refund button from customer.
64. **Can frontend authorization be trusted?** No. Backend must check. Example: admin API protected server-side.
65. **What is accessibility in React?** Use semantic elements and ARIA carefully. Example: `<button>` not clickable `<div>`.
66. **How handle focus?** Use refs after modal opens. Example: `inputRef.current.focus()`
67. **What is aria-pressed?** Toggle button state. Example: like button.
68. **How test React component?** Test user-visible behavior. Example: click apply coupon.
69. **What is React Testing Library?** Tests UI as user sees it. Example: `getByRole("button")`
70. **What is Playwright?** E2E browser testing. Example: checkout flow test.
71. **What is Cypress?** E2E/component testing tool. Example: login test.
72. **How debug rerenders?** React DevTools Profiler. Example: feed item rerenders on typing.
73. **How optimize long list?** Virtualize. Example: 10,000 order rows.
74. **How optimize images?** Lazy load and responsive sizes. Example: feed photos.
75. **How avoid memory leaks?** Cleanup effects. Example: remove `resize` listener.
76. **How cancel fetch?** `AbortController`. Example: cancel old search request.
77. **What is race condition in React?** Older request updates later. Example: search results mismatch.
78. **How fix race?** Abort or track request ID. Example: ignore stale response.
79. **What is derived state?** Value computed from existing state. Example: `total = items.reduce(...)`
80. **Why avoid storing derived state?** It can become inconsistent. Example: cart total stale.
81. **What is controlled modal?** Parent controls open state. Example: `<Modal open={isOpen}/>`
82. **What is compound component?** Related components share context. Example: `<Tabs><Tabs.List/>`
83. **What is render prop?** Function prop returns UI. Example: `<Data>{data => ...}</Data>`
84. **What is HOC?** Function wraps component. Example: `withAuth(Page)`
85. **Hooks vs HOC?** Hooks are simpler for sharing logic. Example: `useAuth()`.
86. **What is StrictMode?** Dev checks for unsafe patterns. Example: double effect call in dev.
87. **Why effect runs twice in dev?** StrictMode detects side-effect bugs. Example: duplicate socket if no cleanup.
88. **What is batching?** Multiple updates combined. Example: set count and loading together.
89. **What is transition?** Mark update non-urgent. Example: filter large list.
90. **What is deferred value?** Delay expensive UI update. Example: search suggestions.
91. **What is React Server Component?** Render component on server. Example: product details without client JS.
92. **Client component?** Needs browser interactivity. Example: add-to-cart button.
93. **What is prop stability?** Props keep same reference when value unchanged. Example: memoized callbacks.
94. **What is reconciliation production issue?** Bad keys corrupt UI state. Example: wrong cart quantity row.
95. **What is XSS risk?** Rendering unsafe HTML. Example: `dangerouslySetInnerHTML`.
96. **How render user content safely?** Escape or sanitize. Example: render comment as text.
97. **How handle WebSocket in React?** Open in effect, cleanup on unmount. Example: chat messages.
98. **How handle offline UI?** Detect network and queue actions. Example: retry failed like.
99. **What is best React interview answer?** Build predictable, accessible, fast UI with clean state. Example: checkout flow.
100. **What should every React feature include?** loading, error, empty, success, permission, and retry states. Example: order page.

