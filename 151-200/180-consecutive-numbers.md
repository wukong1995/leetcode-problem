[question](https://leetcode.com/problems/consecutive-numbers)

找在表里连续出现三次的数，参考讨论区吧，我找了一个使用左连接的办法

```sql
# Write your MySQL query statement below
SELECT DISTINCT logs1.Num as ConsecutiveNums
FROM Logs logs1
        LEFT JOIN Logs logs2 ON logs1.Id = logs2.Id - 1
        LEFT JOIN Logs logs3 ON logs2.Id = logs3.Id - 1
WHERE logs1.Num = logs2.Num AND logs2.Num = logs3.Num
```
