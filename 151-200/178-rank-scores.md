[question](https://leetcode.com/problems/rank-scores)

成绩排名，查出来出现大于当前score的条数就是名次

```sql
# Write your MySQL query statement below
SELECT S1.Score as Score,
(SELECT COUNT(DISTINCT Score) FROM Scores WHERE Score >= S1.Score) as `Rank`
FROM Scores S1
ORDER BY S1.Score DESC
```
