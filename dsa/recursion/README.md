# Recursion: Folder Size

## Problem Statement

Calculate total size of nested folders and files.

## Real Example

Google Drive or S3-like storage calculates folder usage for billing.

## Optimized Approach

Recursively sum child sizes.

## JavaScript Solution

```js
function folderSize(node) {
  if (node.type === "file") return node.size;
  return node.children.reduce((sum, child) => sum + folderSize(child), 0);
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(h)` where `h` is tree height.

## Interview Explanation

Each folder asks the same question of its children and combines their answers.

