[question](https://leetcode.com/problems/largest-number)

比较字符串即可，刚开始使用localeCompare比较，但是它会讲30排在3的前面。看了评论区的办法是两个字符串连起来比较

```js
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
   const res =  nums.map(item => item.toString()).sort((a, b) => (b + a) - (a + b)).join('')

   return +res === 0 ? "0" : res
};
```
