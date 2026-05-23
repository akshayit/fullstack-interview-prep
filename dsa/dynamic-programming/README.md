# Dynamic Programming: Climbing Stairs

## Problem Statement

Count ways to reach step `n` when you can climb 1 or 2 steps.

## Real Example

A checkout flow counts possible user paths through optional steps such as address, coupon, wallet, and card.

## Optimized Approach

The answer for step `n` depends on `n - 1` and `n - 2`.

## JavaScript Solution

```js
function climbStairs(n) {
  if (n <= 2) return n;

  let prev2 = 1;
  let prev1 = 2;

  for (let step = 3; step <= n; step++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(1)`.

## Interview Explanation

Dynamic programming stores answers to smaller overlapping problems so we do not recompute them.

