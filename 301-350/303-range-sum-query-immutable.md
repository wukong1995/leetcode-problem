[question](https://leetcode.com/problems/range-sum-query-immutable)

寻找一个数组范围内的和，刚开始没搞清楚真正的目的，就用最简单的方法实现

```js
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = Array.from(nums)
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.nums.slice(i, j + 1).reduce((acc, num) => acc + num, 0)
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```

看了评论区，可以将数组和存为一个数组，这样求和的时候直接相减就行了
```js
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  this.nums = [0]
  nums.reduce((acc, item) => {
    const sum = acc + item
    this.nums.push(sum)
    return sum
  }, 0)
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.nums[j + 1] - this.nums[i]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
```
