# Tailwind CSS

## Concept Explanation

Tailwind CSS is a utility-first CSS framework for building UI quickly with predefined classes.

## Beginner Explanation

Instead of writing a new CSS class for every dashboard button, you compose small utility classes.

## Realistic Analogy

An e-commerce admin dashboard has repeated filters, tables, badges, and buttons. Tailwind helps keep spacing and colors consistent.

## Interview Answer

Tailwind is useful for fast, consistent UI development when teams follow design tokens and component abstraction. It can become messy if long class strings are duplicated everywhere.

## Code Sample

```tsx
function StatusBadge({ status }: { status: "paid" | "failed" }) {
  const className =
    status === "paid"
      ? "bg-green-50 text-green-700 border-green-200"
      : "bg-red-50 text-red-700 border-red-200";

  return <span className={`rounded border px-2 py-1 text-sm ${className}`}>{status}</span>;
}
```

## Pitfalls

- Duplicating complex class names.
- Ignoring semantic HTML.
- Using arbitrary values everywhere.

## Debugging Tips

- Check generated CSS.
- Extract repeated patterns into components.
- Verify responsive and dark mode variants.

## Follow-up Questions

1. What is utility-first CSS?
2. Tailwind vs CSS modules?
3. How do you avoid duplicate class strings?
4. How would you build an admin dashboard with Tailwind?
5. Why did production miss a class?
6. How do you enforce design consistency?

## Best Practices

- Build reusable components.
- Use theme tokens.
- Keep accessibility separate from styling choices.

## Performance Concerns

Ensure unused utilities are purged by the build process.

## Security Concerns

Do not construct arbitrary class names from untrusted user input.

