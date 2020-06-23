[question](https://leetcode.com/find-k-closest-elements)

查找k个与x相近的元素

由于给的数组是有序的，因此可以转化从数组中截取一个长度为k的小数组：用首尾的元素和x比较，去掉比较远的

```js
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
   while(arr.length > k) {
       if (x - arr[0] <= arr.slice(-1)[0] - x) {
           arr.pop()
       } else {
           arr.shift()
       }
   }

    return arr
};
```
