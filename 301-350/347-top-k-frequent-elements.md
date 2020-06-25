[question](https://leetcode.com/problems/top-k-frequent-elements)

找一个数组中出现频率最高的k个数

找一个map存次数，在来个桶装一下

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = new Map()
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1)
  }

  const temp = []
  for (var [key, value] of map) {
    const arr = (temp[value] || [])
    arr.push(key)
    temp[value] = arr
  }


  const res = []
  for (let i = temp.length - 1; i >= 0; i--) {
     if (temp[i]) {
       res.push(...temp[i])
     }
  }

  // console.log(res)

  return res.slice(0, k)
};
```
