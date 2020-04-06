[question](https://leetcode.com/problems/department-highest-salary)

求每个部分最高的工资

1. 直接where

```sql
SELECT d.name as Department, e.name as Employee, e.Salary
FROM Department d, Employee e where e.Salary = (select Max(Salary) from Employee e2 where e2.DepartmentId = d.Id)
```

2. 有一个group by 求的最大值(推荐)

```sql
SELECT
    Department.name AS 'Department',
    Employee.name AS 'Employee',
    Salary
FROM
    Employee
        JOIN
    Department ON Employee.DepartmentId = Department.Id
WHERE
    (Employee.DepartmentId , Salary) IN
    (   SELECT
            DepartmentId, MAX(Salary)
        FROM
            Employee
        GROUP BY DepartmentId
    )
;
```
