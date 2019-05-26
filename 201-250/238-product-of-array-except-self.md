[question](https://leetcode.com/problems/product-of-array-except-self/)

给定n个整数的数组，其中n> 1，返回一个数组输出，使得output [i]等于除nums [i]之外的所有nums元素的乘积。要求不能用除法。

我的思路是：当前数字的对应的值等于它前面数字和后面数字的乘机，那么就先得到前面数的乘机和后面数的乘积，再相乘即可。

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const formHeadProduct = [1];
  const fromEndProduct = [];
  const result = [];
  const { length } = nums;

  for (let i = 0; i < length - 1; i++) {
    formHeadProduct[i + 1] = formHeadProduct[i] * nums[i]
  }

  fromEndProduct[length - 1] = 1;
  for (let i = length - 1; i > 0; i--) {
    fromEndProduct[i - 1] = fromEndProduct[i] * nums[i]
  }

  for (let i = 0; i < length; i++) {
    result[i] = formHeadProduct[i] * fromEndProduct[i];
  }
  // console.log(formHeadProduct,fromEndProduct )

  return result;
};

```

再简化一下，只使用一个值暂存。
```js
var productExceptSelf = function(nums) {
  let accTemp = 1;
  const result = [];
  const { length } = nums;

  for (let i = 0; i < length; i++) {
    result[i] = accTemp;
    accTemp *= nums[i];
  }

  accTemp = 1;
  for (let i = length - 1; i >= 0; i--) {
    result[i] *= accTemp;
    accTemp *= nums[i];
  }


  return result;
};
```

