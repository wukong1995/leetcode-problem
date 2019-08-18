[question](https://leetcode.com/problems/happy-number)

因为涉及到是不是死循环，所以需要保存一个历史数字的组。这里使用数组存储判断元素是否存在是O(n)的时间复杂度，使用set是O(1)的时间复杂度，这一块比较适合使用set。

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(num) {
  const oldNumbers = new Set()
  oldNumbers.add(num)

  while(true) {
    const nextNumber = num.toString().split('').reduce((acc, item) => acc + Math.pow(parseInt(item), 2), 0)

    if (nextNumber === 1) {
      return true;
    } else if(oldNumbers.has(nextNumber)) {
      return false
    } else {
      oldNumbers.add(nextNumber)
      num = nextNumber
    }

  }
};
```