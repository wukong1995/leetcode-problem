[question](https://leetcode.com/problems/duplicate-emails)

找到重复列，group by一下，查找数量大于1的

```sql
# Write your MySQL query statement below
Select distinct Email From Person Where Email In (Select Email From Person Group By Email Having Count(*)>1)
```
