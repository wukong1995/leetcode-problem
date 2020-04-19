[question](https://leetcode.com/problems/rising-temperature)

找到批前一天温度高的列，参考：https://stackoverflow.com/questions/59112562/comparing-current-row-with-previous-row-leetcode-solution

```sql
# Write your MySQL query statement below
SELECT w2.Id AS Id
FROM Weather w1
JOIN Weather w2 ON DATEDIFF(w2.RecordDate, w1.RecordDate) = 1
               AND w2.Temperature > w1.Temperature
```
