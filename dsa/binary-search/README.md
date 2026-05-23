# Binary Search: First Bad Version

## Problem Statement

Find the first version where builds started failing.

## Real Example

A CI system finds which deployment introduced payment checkout failures.

## Optimized Approach

Binary search over versions because once a version is bad, later versions are considered bad in this simplified model.

## JavaScript Solution

```js
function firstBadVersion(n, isBadVersion) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (isBadVersion(mid)) right = mid;
    else left = mid + 1;
  }

  return left;
}
```

## Time Complexity

`O(log n)`.

## Space Complexity

`O(1)`.

## Interview Explanation

Discard half the search space after every check.

