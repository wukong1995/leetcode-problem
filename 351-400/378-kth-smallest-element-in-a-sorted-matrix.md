[question](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix)

查找一个二维矩阵中中第n小的数，矩阵的行列都是升序排序

由矩阵的特点知道，左上角是最小的数，右下角是最大的数，因此可以使用二分法，一次一次缩小范围

```js
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let left = matrix[0][0]
    const { length } = matrix
    let right = matrix[length - 1][length - 1]

    while(left < right) {
        const middle = left + Math.floor((right - left) / 2)
        let count = 0
        for (let i = 0; i< length; i++) {
            count += getLessCount(middle, matrix[i])
        }


        if (count < k) {
            left = middle + 1;
        } else {
            right = middle
        }
    }

    return left
};

const getLessCount = (target, arr) => {
    return arr.filter(num => num <= target).length
}

```
