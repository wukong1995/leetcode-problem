[question](https://leetcode.com/problems/second-highest-salary)

查找数据库第二大的数字

```sql
select max(Salary) as SecondHighestSalary from Employee where Salary < (select max(Salary) from Employee);
```
