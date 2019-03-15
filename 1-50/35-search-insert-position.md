[question](https://leetcode.com/problems/search-insert-position/)

将数字插入排序好的数组中

```js
var searchInsert = function (nums, target) {
  let insertIndex = 0;
  nums.forEach((item, index) => {
    if (item < target) {
      insertIndex = index + 1;
    }
  });

  return insertIndex;
};
```

想了想，使用二分法查找
```js
const getIndex = (nums, target, baseIndex = 0) => {
  let insertIndex = 0;
  nums.forEach((item, index) => {
    if (item < target) {
      insertIndex = index + 1;
      console.log('fuzhi', index + 1)
    }
  });
  return insertIndex + baseIndex;
};

var searchInsert = function (nums, target) {
  const middleIndex = parseInt(nums.length / 2, 10);
  const middleNum = nums[middleIndex];

  if (middleNum === target) {
    return middleIndex;
  } else if (middleNum > target) {
    return getIndex(nums.slice(0, middleIndex), target);
  }
  return getIndex(nums.slice(middleIndex + 1), target, middleIndex + 1);
};
```
哇哦，效率大大提升, 可以考虑递归二分法。

额，堆栈溢出了...
```js
const dichotomySearch = (nums, target, baseIndex = 0) => {
  if (nums.length === 1) {
    return nums[0] > target ? baseIndex : baseIndex + 1;
  }

  const middleIndex = parseInt(nums.length / 2, 10);
  const middleNum = nums[middleIndex];

  if (middleNum === target) {
    return middleIndex;
  } else if (middleNum > target) {
    return dichotomySearch(nums.slice(0, middleIndex), target, baseIndex);
  }
  return dichotomySearch(nums.slice(middleIndex + 1), target, baseIndex + middleIndex + 1);
};
```
