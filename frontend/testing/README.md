# Frontend Testing

## Concept Explanation

Frontend testing checks that UI behavior works for users, not just that functions return values.

## Beginner Explanation

For Amazon checkout, tests should verify that a user can enter address, apply coupon, choose payment, and place an order.

## Realistic Analogy

For LinkedIn feed, test creating a post, liking it, commenting, and seeing optimistic UI update correctly.

## Interview Answer

Use unit tests for pure logic, integration tests for components and API boundaries, and end-to-end tests for critical user journeys. Jest, Cypress, and Playwright cover different levels.

## Code Example

```ts
import { test, expect } from "@playwright/test";

test("user can apply coupon during checkout", async ({ page }) => {
  await page.goto("/checkout");
  await page.getByLabel("Coupon code").fill("SAVE20");
  await page.getByRole("button", { name: "Apply" }).click();
  await expect(page.getByText("Coupon applied")).toBeVisible();
});
```

## Pitfalls

- Testing implementation details.
- Depending on arbitrary timeouts.
- Ignoring accessibility selectors.

## Debugging Tips

- Record traces for flaky Playwright tests.
- Mock network at the correct boundary.
- Prefer role and label selectors.

## Follow-up Questions

1. What is the testing pyramid?
2. What should be tested with Jest vs Playwright?
3. How do you test loading and error states?
4. Why is checkout test flaky in CI?
5. How do you debug tests that pass locally but fail in CI?
6. How do you design test coverage for a banking dashboard?

## Best Practices

- Test user-visible behavior.
- Keep critical flows covered by E2E tests.
- Use deterministic test data.
- Run tests in CI.

## Performance Concerns

Large E2E suites can slow CI. Keep them focused on critical paths and move pure logic to unit tests.

## Security Concerns

Do not use real payment credentials or production user data in tests.

