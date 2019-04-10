[question](https://leetcode.com/problems/majority-element/)


找出数组中出现次数最多的元素。

本来是想使用桶排序，但是万一出现20000这个数，我的桶的个数就太多了。
于是找到了这个方法“摩尔投票法”，假定当前目标元素是你想要的这个元素，如果遇到相同的，count加一。如果count等于0，就换目标元素。

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let result = nums[0];
  let count = 1;
  const { length } = nums;
  let i = 1;

  while(i < length) {
    if (count === 0) {
      result = nums[i];
      count++;
    } else if (result === nums[i]) {
      count++;
    } else {
      count--;
    }
    i++;
  }

  return result;
};
```
