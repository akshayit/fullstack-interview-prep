# DSA: 100 Interview Questions With Small JavaScript Examples

Practice in: [OneCompiler JavaScript](https://onecompiler.com/javascript)

1. **What is array traversal?** Visit each item. Example: `for (const x of arr) sum += x;`
2. **Find max in array.** Track best value. Example: `Math.max(...nums)`.
3. **Reverse array.** Swap ends. Example: `arr.reverse()`.
4. **Prefix sum.** Store running totals. Example: `prefix[i+1]=prefix[i]+nums[i]`.
5. **Range sum query.** Use prefix difference. Example: `prefix[r+1]-prefix[l]`.
6. **Two sum.** Use hashmap. Example: `seen.has(target-n)`.
7. **Contains duplicate.** Use set. Example: `new Set(nums).size !== nums.length`.
8. **Move zeroes.** Two pointers. Example: write non-zero forward.
9. **Merge sorted arrays.** Two pointers. Example: compare `a[i]` and `b[j]`.
10. **Best time to buy stock.** Track minimum price. Example: `profit=Math.max(profit, price-min)`.
11. **Kadane algorithm.** Max subarray. Example: `cur=Math.max(n,cur+n)`.
12. **Product except self.** Prefix and suffix products. Example: no division needed.
13. **Rotate array.** Reverse parts. Example: reverse whole, then segments.
14. **Find missing number.** Sum or XOR. Example: `n*(n+1)/2 - sum`.
15. **Majority element.** Boyer-Moore. Example: candidate count.
16. **Valid anagram.** Count chars. Example: `map.set(ch,count+1)`.
17. **Palindrome string.** Compare ends. Example: `s[l] === s[r]`.
18. **Valid palindrome ignoring symbols.** Skip non-alphanumeric. Example: `/[a-z0-9]/i`.
19. **Longest common prefix.** Shrink prefix. Example: `while(!word.startsWith(prefix))`.
20. **First unique char.** Frequency map. Example: count then scan.
21. **Group anagrams.** Sort key or count key. Example: `key = word.split("").sort().join("")`.
22. **Longest substring without repeat.** Sliding window. Example: update `left`.
23. **Minimum window substring.** Sliding window with counts. Example: expand and shrink.
24. **String compression.** Count repeated chars. Example: `"aaabb" -> "a3b2"`.
25. **Encode/decode strings.** Length prefix. Example: `5#hello`.
26. **HashMap use case.** Fast lookup. Example: cart item by product ID.
27. **Frequency map.** Count occurrences. Example: `freq.set(x,(freq.get(x)||0)+1)`.
28. **Set use case.** Unique values. Example: visited users.
29. **LRU cache idea.** Map plus linked list. Example: recent product cache.
30. **Subarray sum equals k.** Prefix sum map. Example: `count += seen.get(sum-k)`.
31. **Stack use case.** Last-in-first-out. Example: undo actions.
32. **Valid parentheses.** Stack matching. Example: `stack.pop()`.
33. **Min stack.** Stack with current min. Example: push `{value,min}`.
34. **Daily temperatures.** Monotonic stack. Example: wait for warmer day.
35. **Next greater element.** Monotonic stack. Example: pop smaller values.
36. **Evaluate RPN.** Stack operands. Example: `["2","3","+"]`.
37. **Queue use case.** First-in-first-out. Example: order processing.
38. **BFS queue.** Visit level by level. Example: `queue.push(child)`.
39. **Moving average.** Queue plus sum. Example: remove oldest.
40. **Rotting oranges.** Multi-source BFS. Example: start from all rotten.
41. **Linked list traversal.** Move pointer. Example: `node = node.next`.
42. **Reverse linked list.** Rewire pointers. Example: `curr.next = prev`.
43. **Detect cycle.** Slow and fast pointers. Example: `fast = fast.next.next`.
44. **Merge two lists.** Dummy head. Example: `tail.next = smaller`.
45. **Remove nth from end.** Two pointers gap. Example: fast moves n ahead.
46. **Middle of list.** Slow/fast. Example: slow ends middle.
47. **Tree DFS.** Recursively visit. Example: preorder/inorder/postorder.
48. **Tree BFS.** Queue by levels. Example: level order.
49. **Max depth tree.** Recursion. Example: `1 + max(left,right)`.
50. **Validate BST.** Bounds recursion. Example: `min < node.val < max`.
51. **Lowest common ancestor.** Use tree paths/rules. Example: BST compare values.
52. **Invert binary tree.** Swap children. Example: `[left,right]=[right,left]`.
53. **Path sum.** DFS with remaining sum. Example: `target - node.val`.
54. **Serialize tree.** Store null markers. Example: preorder string.
55. **Trie use case.** Prefix search. Example: search suggestions.
56. **Graph representation.** Adjacency list. Example: `Map<node, neighbors>`.
57. **DFS graph.** Visit deep first. Example: recursive visited set.
58. **BFS graph.** Shortest unweighted path. Example: queue.
59. **Number of islands.** DFS grid. Example: mark land visited.
60. **Clone graph.** Map old node to new node. Example: DFS copy.
61. **Course schedule.** Detect cycle in directed graph. Example: topological sort.
62. **Topological sort.** Order dependencies. Example: build tasks.
63. **Dijkstra.** Shortest weighted path. Example: delivery route costs.
64. **Union Find.** Merge connected sets. Example: friend circles.
65. **Heap use case.** Priority access. Example: top K products.
66. **Top K frequent.** Count plus heap. Example: trending hashtags.
67. **Kth largest.** Min heap size k. Example: leaderboard.
68. **Merge K sorted lists.** Min heap. Example: combine logs.
69. **Median from stream.** Two heaps. Example: live latency median.
70. **Binary search basic.** Search sorted data. Example: `while(l<=r)`.
71. **Lower bound.** First index >= target. Example: insert position.
72. **First bad version.** Binary search answer. Example: deployment failure.
73. **Search rotated array.** One half sorted. Example: compare bounds.
74. **Find peak element.** Binary search slope. Example: `nums[mid] < nums[mid+1]`.
75. **Capacity to ship packages.** Binary search answer. Example: min capacity.
76. **Sliding window fixed size.** Sum last k. Example: API latency window.
77. **Sliding window variable size.** Expand/shrink. Example: longest unique substring.
78. **Max consecutive ones.** Window with flips. Example: tolerate k failures.
79. **Longest repeating replacement.** Window with max frequency. Example: update count.
80. **Two pointers sorted sum.** Move left/right. Example: `sum < target ? l++ : r--`.
81. **Container with most water.** Move shorter line. Example: max area.
82. **Three sum.** Sort plus two pointers. Example: skip duplicates.
83. **Trapping rain water.** Two pointers max left/right. Example: retained capacity.
84. **Recursion base case.** Stop condition. Example: `if(!node) return 0`.
85. **Factorial recursion.** Smaller problem. Example: `n * fact(n-1)`.
86. **Backtracking idea.** Choose, explore, undo. Example: `path.push`, `path.pop`.
87. **Subsets.** Include/exclude. Example: generate filters.
88. **Permutations.** Try unused values. Example: arrange delivery tasks.
89. **Combination sum.** Reuse candidates carefully. Example: promotion bundles.
90. **N-Queens.** Backtracking with constraints. Example: rows/cols/diagonals.
91. **DP idea.** Store repeated subproblem answers. Example: memo map.
92. **Climbing stairs.** Fibonacci DP. Example: `ways[i]=ways[i-1]+ways[i-2]`.
93. **House robber.** Choose take/skip. Example: `max(prev1, prev2+n)`.
94. **Coin change.** Min coins DP. Example: `dp[a]=min(dp[a],dp[a-coin]+1)`.
95. **Longest increasing subsequence.** DP or binary search. Example: tails array.
96. **Longest common subsequence.** 2D DP. Example: compare text versions.
97. **0/1 knapsack.** Pick item or skip. Example: feature prioritization under capacity.
98. **Edit distance.** Insert/delete/replace DP. Example: search typo correction.
99. **Complexity explanation.** Time is operations, space is memory. Example: hashmap uses `O(n)`.
100. **Best DSA interview habit.** Say pattern, edge cases, complexity, then code. Example: "This is sliding window because range moves forward."

