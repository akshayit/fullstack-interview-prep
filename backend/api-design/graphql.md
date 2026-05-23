# GraphQL

## Concept Explanation

GraphQL lets clients ask for exactly the fields they need through a typed schema.

## Beginner Explanation

In a LinkedIn feed, the mobile app may need post text and author photo, while desktop may need reactions, comments, and ad metadata. GraphQL can fetch different shapes from one endpoint.

## Realistic Analogy

REST is like ordering fixed meals. GraphQL is like building your own plate from available items.

## Interview Answer

GraphQL is useful when clients need flexible data fetching and multiple related resources. It needs careful authorization, query complexity limits, caching strategy, and N+1 prevention with batching.

## Code Sample

```graphql
type Post {
  id: ID!
  text: String!
  author: User!
  reactions: ReactionSummary!
}

type Query {
  feed(cursor: String, limit: Int = 20): FeedPage!
}
```

## Pitfalls

- N+1 database queries.
- Missing field-level authorization.
- Allowing expensive deeply nested queries.

## Debugging Tips

- Log resolver timings.
- Add query depth limits.
- Use DataLoader-style batching.

## Follow-up Questions

1. What is GraphQL?
2. REST vs GraphQL?
3. What is resolver N+1?
4. Why is LinkedIn feed GraphQL query slow?
5. How do you debug expensive GraphQL queries?
6. How would you design GraphQL for e-commerce product pages?

## Best Practices

- Keep schema product-focused.
- Add query complexity limits.
- Batch and cache resolver calls.
- Enforce authorization in resolvers.

## Performance Concerns

GraphQL can reduce overfetching but can also create expensive nested server work.

## Security Concerns

Disable unrestricted introspection in sensitive environments, rate limit, enforce auth, and validate query complexity.

