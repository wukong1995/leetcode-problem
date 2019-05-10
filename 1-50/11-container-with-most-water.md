[question](https://leetcode.com/problems/container-with-most-water)

求一个数组两个元素之前最大的乘水量，量=距离*两个元素的最小值。

现在所求值只和距离、两边元素的值有关，这种情况下，我们只能从“距离最大”做起，两边的元素往中间聚拢，过程中需要找到比两边元素更大的值才有可能超过初始的乘积和。

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while(left < right) {
    area = Math.max(area, Math.min(height[left], height[right]) * (right - left));

    if(height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};
```
