# JavaScript: 100 Interview Questions With Small Examples

Practice in: [OneCompiler JavaScript](https://onecompiler.com/javascript)

Each answer should be simple: definition, product example, code, and one production concern.

1. **What is `let`?** Block-scoped variable. Example: `let count = 0; count++;`
2. **What is `const`?** Block-scoped binding that cannot be reassigned. Example: `const userId = "u1";`
3. **What is `var`?** Function-scoped old variable style. Example: `var total = 10;`
4. **What is hoisting?** Declarations are moved conceptually before execution. Example: `console.log(x); var x = 1;`
5. **What is a closure?** Function remembers outer variables. Example: `const inc=()=>{let n=0; return()=>++n};`
6. **What is scope?** Where a variable can be accessed. Example: `{ let token = "x"; }`
7. **What is lexical scope?** Scope is decided by where code is written. Example: `function outer(){ const a=1; return()=>a; }`
8. **What is a callback?** Function passed to another function. Example: `[1,2].map(n => n * 2);`
9. **What is a promise?** Future value for async work. Example: `fetch("/api").then(r => r.json());`
10. **What is `async/await`?** Cleaner promise syntax. Example: `const data = await response.json();`
11. **What is the event loop?** It schedules sync, microtask, and task work. Example: `Promise.resolve().then(()=>console.log("micro"));`
12. **What is a microtask?** High-priority async callback. Example: `queueMicrotask(() => saveDraft());`
13. **What is a macrotask?** Timer or browser task. Example: `setTimeout(() => sync(), 0);`
14. **What is `this`?** Runtime function context. Example: `button.onclick = function(){ console.log(this); };`
15. **Arrow vs normal function?** Arrow keeps lexical `this`. Example: `items.map(item => item.id);`
16. **What is destructuring?** Extract values from objects/arrays. Example: `const { id } = order;`
17. **What is spread?** Copy or expand values. Example: `const next = {...user, name:"A"};`
18. **What is rest parameter?** Collect arguments. Example: `function sum(...nums){ return nums.length; }`
19. **What is optional chaining?** Safe nested access. Example: `user.profile?.avatarUrl`
20. **What is nullish coalescing?** Default only for `null` or `undefined`. Example: `limit ?? 20`
21. **What is truthy/falsy?** Values used as booleans. Example: `if (cart.length) checkout();`
22. **`==` vs `===`?** Strict equality avoids coercion. Example: `userId === "42"`
23. **What is type coercion?** JS converts types automatically. Example: `"5" + 1`
24. **What is an object?** Key-value collection. Example: `const post = { id:"p1", likes:0 };`
25. **What is an array?** Ordered list. Example: `const prices = [100, 200];`
26. **What is `map`?** Transform each item. Example: `orders.map(o => o.id);`
27. **What is `filter`?** Keep matching items. Example: `orders.filter(o => o.status === "paid");`
28. **What is `reduce`?** Combine list into one value. Example: `prices.reduce((s,p)=>s+p,0);`
29. **What is `find`?** Return first match. Example: `users.find(u => u.id === id);`
30. **What is `some`?** Check if any item matches. Example: `items.some(i => i.stock === 0);`
31. **What is `every`?** Check all items match. Example: `items.every(i => i.quantity > 0);`
32. **What is mutation?** Changing existing data. Example: `cart.push(item);`
33. **What is immutability?** Create new data instead of changing old. Example: `const next = [...cart, item];`
34. **What is JSON?** Text format for data exchange. Example: `JSON.stringify(order);`
35. **What is localStorage?** Browser key-value storage. Example: `localStorage.setItem("theme","dark");`
36. **What is sessionStorage?** Tab-lifetime storage. Example: `sessionStorage.getItem("draft");`
37. **What is a cookie?** Small browser storage sent with requests. Example: `document.cookie`
38. **What is DOM?** Browser object model of HTML. Example: `document.querySelector("#search");`
39. **What is event bubbling?** Event moves from child to parent. Example: `list.addEventListener("click", handler);`
40. **What is event delegation?** Parent handles child events. Example: `table.onclick = e => e.target.dataset.id;`
41. **What is debounce?** Run after user stops triggering. Example: `setTimeout(search, 300);`
42. **What is throttle?** Run at most once per interval. Example: `if(Date.now()-last>1000) send();`
43. **What is `AbortController`?** Cancels fetch. Example: `controller.abort();`
44. **What is fetch?** Browser API for HTTP. Example: `await fetch("/v1/orders");`
45. **What is CORS?** Browser rule for cross-origin requests. Example: API must allow frontend origin.
46. **What is error handling?** Catch and recover from failures. Example: `try { await pay(); } catch(e) { showError(e); }`
47. **What is custom error?** Domain-specific error class. Example: `throw new Error("PAYMENT_FAILED");`
48. **What is module import?** Use exported code. Example: `import { debounce } from "./utils.js";`
49. **Default vs named export?** One main export vs many exports. Example: `export default App;`
50. **What is a pure function?** Same input gives same output. Example: `price => price * 0.9`
51. **What is side effect?** Function changes outside world. Example: `localStorage.setItem("x","1");`
52. **What is memoization?** Cache function result. Example: `cache.get(key) ?? compute();`
53. **What is shallow copy?** Copy first level only. Example: `{...user}`
54. **What is deep copy?** Copy nested data. Example: `structuredClone(order);`
55. **What is prototype?** Object inheritance mechanism. Example: `Array.prototype.map`
56. **What is class?** Syntax for constructor/prototype. Example: `class Cart { add(item){} }`
57. **What is `new`?** Creates object from constructor. Example: `new Date();`
58. **What is `Set`?** Unique values. Example: `new Set(["admin","admin"]);`
59. **What is `Map`?** Key-value store with any key type. Example: `new Map([[userId, user]]);`
60. **What is WeakMap?** Map with garbage-collectable object keys. Example: `new WeakMap();`
61. **What is memory leak?** Retained memory not needed. Example: unremoved `window.addEventListener`.
62. **What is garbage collection?** JS frees unreachable memory. Example: set unused reference to `null`.
63. **What is Web Worker?** Runs CPU work off main thread. Example: `new Worker("report.js");`
64. **What is Service Worker?** Network/cache proxy for app. Example: cache static assets offline.
65. **What is XSS?** Injected script attack. Example: avoid `innerHTML = userComment`.
66. **What is CSRF?** Attacker triggers authenticated request. Example: use CSRF token with cookies.
67. **What is input validation?** Check data before use. Example: `if (!email.includes("@")) throw Error();`
68. **What is output encoding?** Safely render user content. Example: use `textContent`.
69. **What is pagination?** Load data in pages. Example: `/feed?cursor=post_10`
70. **What is optimistic UI?** Update UI before server confirms. Example: like count increments immediately.
71. **What is retry?** Try failed request again. Example: retry notification send after timeout.
72. **What is exponential backoff?** Retry with increasing delay. Example: `100, 200, 400 ms`.
73. **What is idempotency?** Same action repeated safely. Example: same payment key returns same payment.
74. **What is race condition?** Result depends on timing. Example: older search response overwrites newer one.
75. **How to fix race in search?** Cancel or ignore stale calls. Example: `if (query !== latest) return;`
76. **What is date handling issue?** Time zones change displayed time. Example: use ISO timestamps.
77. **What is `Intl`?** Format locale data. Example: `new Intl.NumberFormat("en-IN").format(9999);`
78. **What is `Promise.all`?** Wait for all promises. Example: `await Promise.all([users(), orders()]);`
79. **What is `Promise.allSettled`?** Wait even if some fail. Example: dashboard widgets can partially load.
80. **What is `Promise.race`?** First promise wins. Example: timeout wrapper.
81. **What is `Promise.any`?** First successful promise wins. Example: fastest mirror API.
82. **What is dynamic import?** Load module later. Example: `import("./charts.js");`
83. **What is bundling?** Combine modules for browser. Example: route bundle for dashboard.
84. **What is tree shaking?** Remove unused code. Example: import only needed utility.
85. **What is source map?** Map minified code to original. Example: debug production error line.
86. **What is strict mode?** Safer JS behavior. Example: `"use strict";`
87. **What is BigInt?** Large integer type. Example: `9007199254740993n`
88. **Why not use float for money?** Precision errors. Example: store paise as integer.
89. **What is a generator?** Function that can pause. Example: `function* ids(){ yield 1; }`
90. **What is iterator?** Object that returns next values. Example: `[1,2][Symbol.iterator]()`
91. **What is regex?** Pattern matching. Example: `/^\d{10}$/.test(phone)`
92. **What is sanitization?** Clean unsafe input. Example: strip script tags from comments.
93. **What is feature flag?** Toggle behavior without deploy. Example: `if(flags.newCheckout)`.
94. **What is logging?** Record useful events. Example: `console.info("payment_started", {orderId});`
95. **What is metric?** Numeric production signal. Example: checkout error count.
96. **What is performance mark?** Measure frontend timing. Example: `performance.mark("feed-loaded");`
97. **What is lazy loading?** Load only when needed. Example: load comments after expanding post.
98. **What is virtual scrolling?** Render visible rows only. Example: admin table with 10,000 orders.
99. **What is secure token storage concern?** Stolen tokens allow account access. Example: prefer httpOnly cookies for web sessions.
100. **How do you explain JS in one line?** JS makes product UI interactive and handles async workflows. Example: search, chat, checkout, notifications.

