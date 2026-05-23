# Strings: Valid Anagram

## Problem Statement

Check whether two strings contain the same characters with the same frequency.

## Real Example

A search system normalizes query tokens and checks whether two tags are equivalent after sorting or counting.

## Optimized Approach

Use a frequency map in one pass over both strings.

## JavaScript Solution

```js
function isAnagram(a, b) {
  if (a.length !== b.length) return false;

  const count = new Map();
  for (const char of a) count.set(char, (count.get(char) ?? 0) + 1);
  for (const char of b) {
    if (!count.has(char)) return false;
    count.set(char, count.get(char) - 1);
    if (count.get(char) === 0) count.delete(char);
  }

  return count.size === 0;
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(k)` where `k` is number of unique characters.

## Interview Explanation

Sorting works but costs `O(n log n)`. Counting characters gives a linear solution.

