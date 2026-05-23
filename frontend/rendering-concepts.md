# Rendering Concepts: CSR, SSR, SSG, ISR

## Concept Explanation

Rendering decides when and where HTML is created: browser, server, build time, or after deployment.

## Beginner Explanation

An Instagram-like private feed can be client-rendered. A public Amazon product page benefits from server or static rendering for SEO and fast first load.

## Realistic Analogy

Netflix marketing pages can be static. Personalized recommendations need user-specific rendering.

## Interview Answer

CSR renders in the browser. SSR renders per request. SSG renders at build time. ISR serves static pages and refreshes them after a configured interval or trigger.

## Code Sample

```ts
const renderingChoice = {
  privateDashboard: "CSR or SSR with auth",
  productPage: "SSG or ISR",
  liveStockPrice: "SSR or CSR with polling/websocket",
  blog: "SSG"
};
```

## Pitfalls

- Caching user-specific pages publicly.
- Choosing SSR for everything.
- Ignoring hydration mismatches.

## Debugging Tips

- Check where the code runs.
- Inspect cache headers.
- Compare server HTML with hydrated client UI.

## Follow-up Questions

1. What is CSR?
2. SSR vs SSG?
3. What is ISR?
4. Why is product price stale?
5. How do you debug hydration mismatch?
6. How do you design rendering for e-commerce?

## Best Practices

- Match rendering strategy to data freshness and SEO.
- Keep personalized data out of public caches.
- Stream slow sections when useful.

## Performance Concerns

SSR can increase server load. CSR can increase client JavaScript. SSG can go stale.

## Security Concerns

Never leak private user data into static HTML or shared caches.

