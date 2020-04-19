[question](https://leetcode.com/problems/delete-duplicate-emails)

删除表中重复列，参见：https://stackoverflow.com/questions/2630440/how-to-delete-duplicates-on-a-mysql-table

```sql
# Write your MySQL query statement below
delete
from Person using Person,
    Person p1
where Person.Id > p1.Id
    and Person.Email = p1.Email
```
