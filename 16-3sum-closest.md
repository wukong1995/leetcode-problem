[question](https://leetcode.com/problems/3sum-closest/)

是15题的后续，这个是求target最相近的结果，在15题的基础上稍微改一下即可

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let closestNum = nums[0] + nums[1] + nums[2];
  let distance = Infinity;

  nums = nums.sort((a, b) => a - b);
  const length = nums.length;

  for (let index = 0; index < length; index++) {
    const currentNum = nums[index];

    if (currentNum !== nums[index - 1]) {
      let low = index + 1;
      let high = length - 1;


      while (low < high) {
        const total = currentNum + nums[low] + nums[high];
        const newDistance = Math.abs(total - target);

        if (total === target) {
          return target;
        }

        if (newDistance < distance) {
          closestNum = total;
          distance = newDistance;
        }

        if (total > target) {
          high--;
        } else {
          low++;
        }
      }
    }
  }
  return closestNum;
};
```
