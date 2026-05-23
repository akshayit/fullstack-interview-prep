# Queue: Moving Average from Data Stream

## Problem Statement

Calculate the moving average of the last `k` values.

## Real Example

A monitoring dashboard shows average API latency over the latest 5 minutes.

## Optimized Approach

Use a queue and running sum.

## JavaScript Solution

```js
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }

  next(value) {
    this.queue.push(value);
    this.sum += value;

    if (this.queue.length > this.size) {
      this.sum -= this.queue.shift();
    }

    return this.sum / this.queue.length;
  }
}
```

## Time Complexity

`O(1)` amortized per value.

## Space Complexity

`O(k)`.

## Interview Explanation

The queue keeps only the latest values, and the running sum avoids recalculating every time.

