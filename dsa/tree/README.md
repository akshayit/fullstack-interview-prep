# Tree: Level Order Traversal

## Problem Statement

Return tree nodes level by level.

## Real Example

An organization chart in an admin dashboard displays employees by reporting level.

## Optimized Approach

Use BFS with a queue.

## JavaScript Solution

```js
function levelOrder(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];

  while (queue.length) {
    const size = queue.length;
    const level = [];

    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
  }

  return result;
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(n)`.

## Interview Explanation

BFS naturally processes one layer at a time.

