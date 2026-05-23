# Sliding Window: Longest Substring Without Repeating Characters

## Problem Statement

Find the longest substring without repeated characters.

## Real Example

A username validator finds the longest clean segment without repeated restricted markers.

## Optimized Approach

Move a window with two pointers and store latest character positions.

## JavaScript Solution

```js
function lengthOfLongestSubstring(s) {
  const lastSeen = new Map();
  let left = 0;
  let best = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (lastSeen.has(char) && lastSeen.get(char) >= left) {
      left = lastSeen.get(char) + 1;
    }
    lastSeen.set(char, right);
    best = Math.max(best, right - left + 1);
  }

  return best;
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(k)`.

## Interview Explanation

The left pointer only moves forward, so each character is processed once.

