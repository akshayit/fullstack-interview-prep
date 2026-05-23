# Authentication and Authorization

## Concept Explanation

Authentication proves who the user is. Authorization decides what the user can do.

## Beginner Explanation

Login proves you are the Amazon customer. Authorization decides whether you can view your own orders or access the seller admin dashboard.

## Realistic Analogy

In a company office, ID card entry is authentication. Access to the finance room is authorization.

## Interview Answer

JWT is stateless and useful for APIs, sessions are easy to revoke and common for web apps, OAuth lets users grant access through a provider like Google. Authorization must be checked on the server for every protected action.

## Code Example

```js
function canRefundOrder(user, order) {
  if (user.role === "admin") return true;
  if (user.role === "support" && order.status !== "delivered") return true;
  return false;
}

app.post("/v1/orders/:id/refund", requireAuth, async (req, res) => {
  const order = await getOrder(req.params.id);

  if (!canRefundOrder(req.user, order)) {
    res.status(403).json({ error: { code: "FORBIDDEN" } });
    return;
  }

  const refund = await refundOrder(order.id);
  res.json({ data: refund });
});
```

## Pitfalls

- Checking authorization only in the frontend.
- Putting sensitive data inside JWT payloads.
- Not rotating tokens or invalidating sessions.
- Confusing roles with ownership.

## Debugging Tips

- Log user ID, role, resource ID, and decision.
- Check token expiry and clock skew.
- Reproduce with a user who has minimum permissions.

## Follow-up Questions

1. What is authentication?
2. What is authorization?
3. JWT vs session?
4. How would you secure seller access in an e-commerce dashboard?
5. Why can one user see another user's order?
6. How would you design RBAC and ABAC?

## Best Practices

- Check auth and authorization on the server.
- Use short-lived access tokens.
- Store refresh tokens securely.
- Add audit logs for sensitive actions.

## Performance Concerns

Permission checks may require database calls. Cache carefully and invalidate when roles change.

## Security Concerns

Protect against token theft, CSRF for cookie sessions, broken access control, privilege escalation, and insecure direct object references.

