# CSS

## Concept Explanation

CSS controls layout, spacing, typography, responsiveness, and visual states.

## Beginner Explanation

CSS decides how an Instagram feed card looks on desktop and mobile: image size, caption spacing, like button state, and comment layout.

## Realistic Analogy

An e-commerce admin dashboard needs dense tables, clear filters, sticky headers, and readable status badges. CSS is not decoration only; it improves speed of work.

## Interview Answer

CSS layout is mostly solved with Flexbox for one-dimensional alignment and Grid for two-dimensional page structure. Good CSS is predictable, responsive, accessible, and avoids layout shifts.

## Production Example

```css
.orders {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  min-height: 100vh;
}

.order-table {
  width: 100%;
  border-collapse: collapse;
}

.status[data-state="delayed"] {
  color: #8a3b00;
  background: #fff3d6;
}

@media (max-width: 760px) {
  .orders {
    grid-template-columns: 1fr;
  }
}
```

## Pitfalls

- Hardcoding heights that break with real content.
- Styling focus states away.
- Using one global CSS file with accidental overrides.

## Debugging Tips

- Use the layout panel for Grid and Flexbox.
- Check computed styles to find overrides.
- Test long names, empty states, and small screens.

## Follow-up Questions

1. When do you use Flexbox vs Grid?
2. What causes Cumulative Layout Shift?
3. How does CSS specificity work?
4. How would you style a responsive LinkedIn feed?
5. Why did a button become unclickable after a CSS change?
6. How do you organize CSS in a large React app?

## Best Practices

- Use design tokens for colors, spacing, and type.
- Keep layouts resilient with `minmax`, `clamp`, and sensible constraints.
- Preserve visible focus states.

## Performance Concerns

Avoid expensive selectors, layout thrashing, and animating layout properties. Prefer `transform` and `opacity` for animations.

## Security Concerns

Do not allow arbitrary user CSS in product pages unless it is sandboxed. CSS can leak interaction states and break the UI.

