[question](https://leetcode.com/problems/customers-who-never-order)

左连接后查找字段是null的，注意null不能用=，只能用is

```sql
Select Name as Customers
from Customers
left join Orders
on Customers.Id = Orders.CustomerId
where CustomerId is NULL
```
