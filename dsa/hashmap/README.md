# HashMap: Two Sum

## Problem Statement

Return indexes of two numbers that add up to a target.

## Real Example

In a cart discount engine, find two item prices that match a bundled offer total.

## Optimized Approach

Store seen values in a map and look for the complement.

## JavaScript Solution

```js
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }

  return [];
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(n)`.

## Interview Explanation

The map removes the need for a nested loop by remembering values we already crossed.

