# Frontend Performance

## Concept Explanation

Frontend performance is about loading fast, responding quickly, and staying smooth under real user conditions.

## Beginner Explanation

If Instagram feed images are too large, the app feels slow even if the API is fast.

## Realistic Analogy

In Netflix, users expect thumbnails, previews, and playback controls to appear quickly. Slow JavaScript or image loading can make the product feel broken.

## Interview Answer

Measure first, then optimize. Focus on Core Web Vitals, bundle size, image loading, caching, long tasks, unnecessary rerenders, and network waterfalls.

## Code Example

```js
const worker = new Worker("/workers/report-worker.js");

function exportDashboard(rows) {
  worker.postMessage({ type: "EXPORT_CSV", rows });
}

worker.onmessage = (event) => {
  downloadCsv(event.data.csv);
};
```

## Pitfalls

- Optimizing without measurement.
- Loading every route in the first bundle.
- Blocking the main thread with reports, filters, or image processing.

## Debugging Tips

- Use Lighthouse for broad signals.
- Use Performance panel for long tasks.
- Use React Profiler for rerenders.
- Use network throttling for real mobile behavior.

## Follow-up Questions

1. What is LCP?
2. What is a long task?
3. How do you reduce bundle size?
4. Instagram feed scroll is janky. What do you inspect?
5. Exporting dashboard CSV freezes the tab. How do you fix it?
6. How would you design frontend caching for e-commerce pages?

## Best Practices

- Lazy load non-critical routes.
- Use responsive images.
- Virtualize large lists.
- Move heavy CPU work to web workers.
- Cache static assets with service workers where useful.

## Performance Concerns

Track LCP, INP, CLS, TTFB, JavaScript parse time, memory, cache hit rate, and error rate by route.

## Security Concerns

Service workers can cache sensitive data accidentally. Avoid caching authenticated HTML or private API responses without strict controls.

