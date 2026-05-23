# MySQL: 100 Interview Questions With Small Examples

Practice in: [Programiz SQL Online Compiler](https://www.programiz.com/sql/online-compiler) or [OneCompiler MySQL](https://onecompiler.com/mysql)

1. **What is MySQL?** Relational database. Example: `CREATE TABLE users (id INT);`
2. **What is database?** Collection of tables. Example: `CREATE DATABASE shop;`
3. **What is table?** Rows and columns. Example: `orders(id, user_id, total)`
4. **What is row?** One record. Example: one Amazon order.
5. **What is column?** One field. Example: `email VARCHAR(255)`.
6. **What is primary key?** Unique row ID. Example: `id BIGINT PRIMARY KEY`.
7. **What is foreign key?** Links tables. Example: `user_id REFERENCES users(id)`.
8. **What is unique key?** Prevent duplicates. Example: `email UNIQUE`.
9. **What is index?** Speeds lookups. Example: `CREATE INDEX idx_orders_user ON orders(user_id);`
10. **What is composite index?** Multi-column index. Example: `(user_id, created_at)`.
11. **What is `SELECT`?** Read data. Example: `SELECT * FROM orders;`
12. **What is `WHERE`?** Filter rows. Example: `WHERE status='paid'`.
13. **What is `ORDER BY`?** Sort rows. Example: `ORDER BY created_at DESC`.
14. **What is `LIMIT`?** Restrict count. Example: `LIMIT 20`.
15. **What is pagination?** Fetch data page by page. Example: `LIMIT 20 OFFSET 40`.
16. **Why avoid deep offset?** DB scans skipped rows. Example: use cursor for huge orders.
17. **What is cursor pagination?** Continue after known value. Example: `WHERE id < 100 ORDER BY id DESC`.
18. **What is `INSERT`?** Add row. Example: `INSERT INTO users(email) VALUES('a@x.com');`
19. **What is `UPDATE`?** Change rows. Example: `UPDATE orders SET status='paid' WHERE id=1;`
20. **What is `DELETE`?** Remove rows. Example: `DELETE FROM cart_items WHERE id=1;`
21. **What is soft delete?** Mark deleted. Example: `deleted_at TIMESTAMP NULL`.
22. **What is `JOIN`?** Combine tables. Example: `orders JOIN users ON users.id=orders.user_id`.
23. **What is INNER JOIN?** Matching rows only. Example: orders with valid users.
24. **What is LEFT JOIN?** Keep left rows even without match. Example: products with no reviews.
25. **What is GROUP BY?** Aggregate by group. Example: `GROUP BY user_id`.
26. **What is COUNT?** Count rows. Example: `COUNT(*)`.
27. **What is SUM?** Add values. Example: `SUM(total_in_paise)`.
28. **What is AVG?** Average. Example: `AVG(rating)`.
29. **What is HAVING?** Filter groups. Example: `HAVING COUNT(*) > 5`.
30. **WHERE vs HAVING?** WHERE filters rows, HAVING filters groups. Example: paid orders vs users with 5 orders.
31. **What is transaction?** Queries succeed/fail together. Example: order + inventory.
32. **What is COMMIT?** Save transaction. Example: `COMMIT;`
33. **What is ROLLBACK?** Undo transaction. Example: payment failed.
34. **What is ACID?** Transaction guarantees. Example: checkout consistency.
35. **What is atomicity?** All or nothing. Example: no order without items.
36. **What is consistency?** Data rules remain valid. Example: quantity > 0.
37. **What is isolation?** Transactions do not corrupt each other. Example: inventory race.
38. **What is durability?** Committed data survives crash. Example: paid order remains.
39. **What is isolation level?** Controls concurrent visibility. Example: `READ COMMITTED`.
40. **What is deadlock?** Transactions wait on each other. Example: two checkouts lock products in different order.
41. **How reduce deadlocks?** Lock rows in same order. Example: sort product IDs.
42. **What is normalization?** Reduce duplicate data. Example: users table and orders table.
43. **What is denormalization?** Store duplicate read data. Example: order stores product name snapshot.
44. **Why store price snapshot?** Product price may change later. Example: order item price.
45. **What is schema design?** Plan tables for access patterns. Example: order history query.
46. **What is EXPLAIN?** Show query plan. Example: `EXPLAIN SELECT * FROM orders;`
47. **What is full table scan?** DB reads entire table. Example: missing index on `user_id`.
48. **What is covering index?** Index has all needed columns. Example: `(user_id, created_at, status)`.
49. **What is cardinality?** Number of unique values. Example: `status` low cardinality.
50. **What is selectivity?** How well filter reduces rows. Example: user_id filter.
51. **What is slow query log?** Logs slow SQL. Example: find slow dashboard query.
52. **What is N+1 query?** One query plus many child queries. Example: orders then items per order.
53. **How fix N+1?** JOIN or batch. Example: `WHERE order_id IN (...)`.
54. **What is connection pool?** Reuse DB connections. Example: Node MySQL pool.
55. **Why limit pool size?** Too many connections hurt DB. Example: traffic spike.
56. **What is replication?** Copy data to replica. Example: read order history from replica.
57. **What is replication lag?** Replica is behind primary. Example: paid order not visible yet.
58. **What is sharding?** Split data across DBs. Example: users by region.
59. **What is partitioning?** Split table internally. Example: orders by month.
60. **What is backup?** Copy for recovery. Example: daily database dump.
61. **What is point-in-time recovery?** Restore to exact time. Example: before bad migration.
62. **What is migration?** Change schema. Example: add `status` column.
63. **How do zero-downtime migrations work?** Add nullable, backfill, switch, then enforce. Example: new order column.
64. **What is constraint?** DB rule. Example: `CHECK (total >= 0)`.
65. **What is NOT NULL?** Value required. Example: `email TEXT NOT NULL`.
66. **What is default value?** Auto value. Example: `created_at DEFAULT CURRENT_TIMESTAMP`.
67. **What is auto increment?** Auto numeric ID. Example: `id BIGINT AUTO_INCREMENT`.
68. **What is UUID?** Globally unique ID. Example: payment ID.
69. **Auto increment vs UUID?** Auto increment compact, UUID distributed. Example: multi-region service.
70. **What data type for money?** Integer paise or DECIMAL. Example: `amount_in_paise INT`.
71. **Why not FLOAT for money?** Precision errors. Example: payment totals.
72. **What is VARCHAR?** Variable text. Example: `email VARCHAR(255)`.
73. **What is TEXT?** Long text. Example: product description.
74. **What is DATETIME/TIMESTAMP?** Date-time types. Example: `created_at`.
75. **How store time zones?** Store UTC. Example: display in user locale.
76. **What is JSON column?** Store semi-structured data. Example: payment provider metadata.
77. **Risk of JSON column?** Harder indexing/validation. Example: dashboard filters slow.
78. **What is view?** Saved query. Example: monthly sales view.
79. **What is stored procedure?** DB-side logic. Example: legacy billing operation.
80. **What is trigger?** Runs on DB event. Example: audit log on update.
81. **Trigger risk?** Hidden behavior. Example: unexpected side effects.
82. **What is SQL injection?** Attacker changes query. Example: unsafe string concat.
83. **How prevent SQL injection?** Parameterized queries. Example: `WHERE id = ?`
84. **What is least privilege?** DB user has minimum permissions. Example: app user cannot drop table.
85. **What is encryption at rest?** Stored data encrypted. Example: backups encrypted.
86. **What is PII?** Personal data. Example: email, phone, address.
87. **How protect PII?** Mask logs and restrict access. Example: hide phone in support view.
88. **What is audit log?** Record sensitive reads/writes. Example: admin changes order status.
89. **What is read replica use case?** Scale read-heavy pages. Example: product catalog reads.
90. **What is primary DB?** Handles writes. Example: checkout order creation.
91. **What is hot row?** One row updated too often. Example: viral post like count.
92. **How handle counters?** Batch or Redis then persist. Example: feed likes.
93. **What is optimistic locking?** Version check before update. Example: `WHERE version=3`.
94. **What is pessimistic locking?** Lock row before update. Example: inventory reservation.
95. **What is `FOR UPDATE`?** Lock selected rows. Example: `SELECT ... FOR UPDATE`.
96. **How design order schema?** orders + order_items + payments. Example: separate item rows.
97. **How design chat schema?** conversations + participants + messages. Example: index `(conversation_id, created_at)`.
98. **How debug slow admin dashboard?** Check query plan, indexes, joins, and rows scanned. Example: `EXPLAIN ANALYZE`.
99. **Best MySQL answer?** Design from access patterns and protect consistency. Example: checkout transaction.
100. **Production MySQL rule?** Measure queries before changing indexes. Example: slow query log plus EXPLAIN.

