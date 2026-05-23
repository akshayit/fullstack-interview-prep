# API Design

## Concept Explanation

API design defines how clients and services communicate using resources, actions, errors, pagination, filtering, versioning, and contracts.

## Beginner Explanation

For a LinkedIn feed, the frontend needs APIs to fetch posts, like posts, add comments, and paginate older content.

## Realistic Analogy

An API is like a restaurant menu. If the menu is clear, customers know what they can order and what they will receive.

## Interview Answer

Good REST APIs use nouns for resources, HTTP methods for actions, clear status codes, consistent error shapes, pagination, idempotency where needed, and versioning for breaking changes.

## Code Example

```http
GET /v1/feed?cursor=post_123&limit=20
POST /v1/posts/post_456/likes
DELETE /v1/posts/post_456/likes/me
```

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Address is required",
    "fields": {
      "address": "Address is required"
    }
  }
}
```

## Pitfalls

- Returning different error formats from different endpoints.
- Using offset pagination for fast-changing feeds.
- Not documenting idempotency for payments.

## Debugging Tips

- Compare frontend request payload against API contract.
- Check status code, response body, and correlation ID.
- Add request validation errors with field-level messages.

## Follow-up Questions

1. What is REST?
2. What is cursor pagination?
3. How do you version APIs?
4. Why does LinkedIn feed show duplicate posts during pagination?
5. How do you debug a 422 validation issue?
6. How would you design APIs for checkout?

## Best Practices

- Use consistent resource names.
- Prefer cursor pagination for feeds.
- Make retryable writes idempotent.
- Add request IDs for tracing.

## Performance Concerns

Avoid N+1 calls, overfetching, underfetching, and expensive filters without indexes.

## Security Concerns

Validate input, enforce authorization, rate limit sensitive endpoints, and avoid exposing internal error details.

