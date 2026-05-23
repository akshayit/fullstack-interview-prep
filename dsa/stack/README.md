# Stack: Valid Parentheses

## Problem Statement

Check whether brackets in a string are balanced.

## Real Example

A template editor for notification emails checks whether variables and brackets are correctly closed before sending.

## Optimized Approach

Use a stack for opening brackets and match each closing bracket with the latest opening bracket.

## JavaScript Solution

```js
function isValidBrackets(input) {
  const pairs = new Map([[")", "("], ["]", "["], ["}", "{"]]);
  const stack = [];

  for (const char of input) {
    if (pairs.has(char)) {
      if (stack.pop() !== pairs.get(char)) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}
```

## Time Complexity

`O(n)`.

## Space Complexity

`O(n)`.

## Interview Explanation

The most recent opening bracket must be closed first, which is exactly last-in-first-out behavior.

