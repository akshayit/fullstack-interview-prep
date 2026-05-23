# Linked List: Detect Cycle

## Problem Statement

Check whether a linked list has a cycle.

## Real Example

A workflow engine must detect if approval steps accidentally loop forever.

## Optimized Approach

Use slow and fast pointers.

## JavaScript Solution

```js
function hasCycle(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }

  return false;
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(1)`.

## Interview Explanation

If there is a loop, the fast pointer eventually catches the slow pointer.

