[question](https://leetcode.com/problems/water-and-jug-problem)

水罐问题，有一个3L和5L的杯子，是否能装4L的水。这个可以用欧几里算法解决，只要目标数量可以整除两个数量的最大公约数，即能实现。

```js
/**
 * @param {number} jug1Capacity
 * @param {number} jug2Capacity
 * @param {number} targetCapacity
 * @return {boolean}
 */
var canMeasureWater = function (jug1Capacity, jug2Capacity, targetCapacity) {
  if (targetCapacity > jug1Capacity + jug2Capacity) {
    return false;
  }
  const num = gcd(jug1Capacity, jug2Capacity)
  return targetCapacity % num === 0
};

function gcd(num1, num2) {
  let temp = num1;
  while(num2 !== 0) {
    temp = num1 % num2;
    num1 = num2;
    num2 = temp;
  }

  return num1;
}
```
