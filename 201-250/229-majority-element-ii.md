[question](https://leetcode.com/problems/majority-element-ii)

给定大小为n的整数数组，找到所有出现超过⌊n /3⌋次的元素。注意：算法应在线性时间和O（1）空间中运行。

使用摩尔投票法选出出现次数最多的两个数，再判断两个数出现的次数是否超多三分之一次

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let result1 = null;
  let count1 = 0;
  let result2 = null;
  let count2 = 0;
  const { length } = nums;

  for(let i = 0; i < length; i++) {
    const currentNum = nums[i];
    if (currentNum === result1) {
      count1++;
    } else if (currentNum === result2) {
      count2++;
    } else {
      if (count1 === 0) {
        result1 = currentNum;
        count1++;
      } else if(count2 === 0) {
        result2 = currentNum;
        count2++;
      } else {
        count1--;
        count2--;
      }
    }
  }

  const res = [];
  count1 = 0;
  count2 = 0;
  nums.forEach(item => {
    if(item === result1) {
      count1++;
    }

    if (item == result2) {
      count2++
    }
  })

  console.log(result1, result2)


  if (count1 > length / 3) {
    res.push(result1)
  }

  if (count2 > length / 3) {
    res.push(result2)
  }

  return res;
};
```