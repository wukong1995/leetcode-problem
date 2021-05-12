[question](https://leetcode.com/problems/arranging-coins)

给一个数字，看能填满多少层楼梯
二分查找


```js
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
   let low = 0
   let high = n
   let res = 0

   while(low <= high) {
     const distance = parseInt((high - low) / 2)
     const middle = low + distance
     const sum = middle * ( middle + 1) / 2


     if (sum === n) {
       return middle
     }

     if (sum > n) {
       high = middle - 1
     } else {
      res = middle
      low = middle + 1
     }
   }

  return res
};
```
