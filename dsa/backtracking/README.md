# Backtracking: Generate Valid Coupon Codes

## Problem Statement

Generate all valid combinations under constraints.

## Real Example

A promotion system generates coupon code patterns from allowed characters and length rules.

## Optimized Approach

Build candidates step by step and stop early when a partial candidate cannot become valid.

## JavaScript Solution

```js
function generateCodes(chars, length) {
  const result = [];

  function backtrack(path) {
    if (path.length === length) {
      result.push(path.join(""));
      return;
    }

    for (const char of chars) {
      if (path[path.length - 1] === char) continue;
      path.push(char);
      backtrack(path);
      path.pop();
    }
  }

  backtrack([]);
  return result;
}
```

## Time Complexity

Exponential, based on branching factor and depth.

## Space Complexity

`O(depth)` excluding output.

## Interview Explanation

Backtracking explores choices, and pruning removes invalid branches early.

