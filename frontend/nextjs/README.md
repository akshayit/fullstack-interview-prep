# Next.js

## Concept Explanation

Next.js is a React framework for routing, rendering, server components, API routes, and production optimizations.

## Beginner Explanation

For an Amazon product page, some content should load fast for SEO and sharing. Next.js can render it on the server before sending HTML to the browser.

## Realistic Analogy

Netflix can statically generate public marketing pages, server-render personalized pages, and client-render interactive playback controls.

## Interview Answer

CSR renders in the browser, SSR renders on each request, SSG renders at build time, and ISR updates static pages after deployment on a schedule or trigger.

## Code Example

```tsx
export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetch(`https://api.example.com/products/${params.id}`, {
    next: { revalidate: 60 }
  }).then((res) => res.json());

  return (
    <main>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </main>
  );
}
```

## Pitfalls

- Caching personalized data accidentally.
- Using SSR for pages that could be static.
- Sending secrets to client components.

## Debugging Tips

- Check response headers for cache behavior.
- Log whether code runs on server or client.
- Reproduce stale data with exact revalidation settings.

## Follow-up Questions

1. What is SSR?
2. What is ISR?
3. When should a component be a client component?
4. Why did a product page show stale price?
5. How do you debug hydration mismatch?
6. How would you design Next.js for a multi-role admin dashboard?

## Best Practices

- Keep secrets server-side.
- Use server rendering for SEO and first load.
- Use client components for interactivity.
- Be explicit about cache behavior.

## Performance Concerns

Avoid overfetching, reduce JavaScript sent to the browser, stream slow sections, and cache stable data carefully.

## Security Concerns

Never expose private tokens through client bundles. Validate auth and authorization on the server for protected routes.

