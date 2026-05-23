# Graph: Number of Islands

## Problem Statement

Count groups of connected `1`s in a grid.

## Real Example

A delivery map groups serviceable zones that are connected by available roads.

## Optimized Approach

Run DFS or BFS from each unvisited land cell.

## JavaScript Solution

```js
function numIslands(grid) {
  let count = 0;
  const rows = grid.length;
  const cols = grid[0]?.length ?? 0;

  function dfs(r, c) {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] !== "1") return;
    grid[r][c] = "0";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }

  return count;
}
```

## Time Complexity

`O(rows * cols)`.

## Space Complexity

`O(rows * cols)` worst case recursion stack.

## Interview Explanation

Each cell is visited once. DFS marks all connected land as already counted.

