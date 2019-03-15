[question](https://leetcode.com/problems/climbing-stairs/)

面试中经常见的题目：走n阶的楼梯，一次可以走2个或者1个，问有多少种走法


1.一种是递归思想
2.还有一个是排列思想（C）


使用递归来做
```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
};
```
另一种递归：

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  return recursiveclimb(0, n);
};

var recursiveclimb = (i, n) => {
  if(i > n) {
    return 0;
  }
  
  if (i === n) {
    return 1;
  }
  
  return recursiveclimb(i + 1, n) + recursiveclimb(i + 2, n);
}
```