[question](https://leetcode.com/problems/combine-two-tables/)

联表查询，数据库的语法要忘光了。本来写的是一个where语句，但是run code的时候，发现需要join查询。

```sql
# Write your MySQL query statement below
SELECT Person.FirstName, Person.LastName, Address.City, Address.State from Person LEFT JOIN Address on Person.PersonId = Address.PersonId
```
