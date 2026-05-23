# Heap: Top K Frequent Items

## Problem Statement

Return the `k` most frequent items.

## Real Example

LinkedIn trends show the most common hashtags in recent posts.

## Optimized Approach

Count frequencies, then keep a min heap of size `k`.

## JavaScript Solution

```js
function topKFrequent(nums, k) {
  const freq = new Map();
  for (const num of nums) freq.set(num, (freq.get(num) ?? 0) + 1);

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => num);
}
```

## Time Complexity

`O(n log n)` with sorting. In interviews, mention min heap improves to `O(n log k)`.

## Space Complexity

`O(n)`.

## Interview Explanation

The key idea is frequency counting first. Use sorting for clarity or heap when `k` is much smaller than `n`.

