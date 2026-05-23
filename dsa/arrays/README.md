# Arrays: Product Revenue Prefix Sum

## Problem Statement

Given daily revenue numbers, answer multiple range sum queries.

## Real Example

An Amazon seller dashboard asks: "What was revenue from day 10 to day 20?"

## Optimized Approach

Build prefix sums once. Each query is answered in `O(1)`.

## JavaScript Solution

```js
function buildPrefixSum(values) {
  const prefix = [0];
  for (const value of values) {
    prefix.push(prefix[prefix.length - 1] + value);
  }
  return prefix;
}

function rangeSum(prefix, left, right) {
  return prefix[right + 1] - prefix[left];
}
```

## Time Complexity

Build: `O(n)`, query: `O(1)`.

## Space Complexity

`O(n)`.

## Interview Explanation

Instead of summing the same days again and again, store running totals. A range sum becomes total until right minus total before left.

