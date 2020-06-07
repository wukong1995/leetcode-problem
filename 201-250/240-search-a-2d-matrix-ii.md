[question](https://leetcode.com/problems/search-a-2d-matrix-ii)

在二维数组中是否存在一个数？二维数组有两个特性：从左到右，从上到下升序

从当前数字开始找，再向右向下扩展，结果超时了。。。难道要用二分？
```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false

   return helper(matrix, 0, 0, target)
};

var helper = (matrix, x, y, target) => {
    if (y >= matrix[0].length) {
        return false
    }

    if (x >= matrix.length) {
        return false
    }

    // console.log('----matrix[x, y]', x, y)
    const current = matrix[x][y]

    if (current === target) {
        return true
    }

    if (current > target) {
        return false
    }

    const right = helper(matrix, x + 1, y, target)
    if (right) {
        return true
    }

    const down = helper(matrix, x, y + 1, target)
    if (down) {
        return true
    }

    return false
}
```

二分果然可以了

```js
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length === 0) return false;

    for (let i=0; i<matrix.length; i++){
       let row = matrix[i]
        if (helper(row, target))
            return true;
    }
    return false;
};

var helper = function(row,value){
    let start = 0,
        end = row.length-1;

    while (start<=end){
        let mid = Math.floor((start + end) / 2)
        if (value === row[mid]){
            return true
        } else if (value > row[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}
```
