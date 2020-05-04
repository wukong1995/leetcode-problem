[question](https://leetcode.com/problems/nth-highest-salary)

查找薪资第n高，排序后limit即可

```sql
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  DECLARE M INT;
  SET M = N-1;
  RETURN (
      # Write your MySQL query statement below.
      Select DISTINCT Salary from Employee Order By Salary DESC LIMIT M, 1
  );
END
```
