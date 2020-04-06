[question](https://leetcode.com/problems/employees-earning-more-than-their-managers)

找出比自己经理薪资高的员工：join一下好比较

```sql
SELECT e1.Name as Employee FROM Employee e1
JOIN Employee e2 ON e1.ManagerId = e2.Id
WHERE e1.Salary > e2.Salary;
```

也阔以这样：
```sql
SELECT e1.Name as Employee FROM Employee e1, Employee e2
WHERE e1.ManagerId = e2.Id AND e1.Salary > e2.Salary;
```
