# Two Pointers: Container With Most Water

## Problem Statement

Find two lines that can hold the most water.

## Real Example

In capacity planning, choose two time boundaries that maximize retained active traffic under a limiting capacity.

## Optimized Approach

Start at both ends and move the shorter side inward.

## JavaScript Solution

```js
function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let best = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    best = Math.max(best, area);

    if (height[left] < height[right]) left++;
    else right--;
  }

  return best;
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(1)`.

## Interview Explanation

Moving the taller side cannot improve the limiting height, so move the shorter side.

