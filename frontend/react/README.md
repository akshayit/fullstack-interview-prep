# React

## Concept Explanation

React is a UI library for building component-based interfaces. It rerenders components when state or props change and updates the DOM efficiently through reconciliation.

## Beginner Explanation

An Instagram feed has repeated post cards. React lets you build one `PostCard` component and reuse it for every post.

## Realistic Analogy

When you like a LinkedIn post, only the like count and button state should update. React helps update the changed UI without rebuilding the whole page manually.

## Interview Answer

React reconciliation compares the previous render tree with the new render tree and decides the minimal DOM changes. Stable keys help React identify list items correctly across renders.

## Code Example

```tsx
type Post = {
  id: string;
  author: string;
  caption: string;
  liked: boolean;
  likes: number;
};

function Feed({ posts, onToggleLike }: { posts: Post[]; onToggleLike: (id: string) => void }) {
  return (
    <main aria-label="Instagram feed">
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.author}</h2>
          <p>{post.caption}</p>
          <button onClick={() => onToggleLike(post.id)} aria-pressed={post.liked}>
            {post.liked ? "Liked" : "Like"} {post.likes}
          </button>
        </article>
      ))}
    </main>
  );
}
```

## Production Problem

If you use array index as a key in a reorderable feed, React may reuse the wrong component instance. Users can see wrong input values, incorrect animation state, or stale like buttons.

## Pitfalls

- Using `useEffect` for derived state.
- Missing cleanup for subscriptions.
- Passing unstable objects to memoized children.
- Using index keys for dynamic lists.

## Debugging Tips

- Use React DevTools Profiler.
- Log component mounts and unmounts for suspicious memory leaks.
- Check if rerenders come from parent state, context, or unstable props.

## Follow-up Questions

1. What are props and state?
2. What is reconciliation?
3. How does `useEffect` cleanup work?
4. Why is Instagram feed rerendering too often?
5. Why did a WebSocket listener keep firing after leaving the page?
6. How would you structure a large React dashboard?

## Best Practices

- Keep state close to where it is used.
- Split server state and UI state.
- Use stable keys.
- Prefer composition over deep prop drilling.

## Performance Concerns

Use virtualization for long feeds, memoization for expensive renders, image optimization for media-heavy pages, and code splitting for large routes.

## Security Concerns

Avoid rendering untrusted HTML. For user posts and comments, sanitize content and enforce backend authorization.

