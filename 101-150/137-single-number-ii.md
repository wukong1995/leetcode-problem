[question](https://leetcode.com/problems/single-number-ii)

延续136的方法，看评论区都是位运算，找了一个讲解：https://www.cnblogs.com/grandyang/p/4263927.html，下面摘了一段解释

>这道题是之前那道 Single Number 的延伸，那道题的解法就比较独特，是利用计算机按位储存数字的特性来做的，这道题就是除了一个单独的数字之外，数组中其他的数字都出现了三次，还是要利用位操作 Bit Manipulation 来解。可以建立一个 32 位的数字，来统计每一位上1出现的个数，如果某一位上为1的话，那么如果该整数出现了三次，对3取余为0，这样把每个数的对应位都加起来对3取余，最终剩下来的那个数就是单独的数字。


```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i< nums.length; i += 3) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i]
    }
  }
};
```
