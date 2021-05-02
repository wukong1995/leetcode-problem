[question](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree)

验证一棵树格式化的前序排序是否正确，用栈！

```js
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const stack = []
  let i = 0
  const list = preorder.split(',')


  while(i < list.length) {
    if (list[i] === '#') {
      if (stack[stack.length - 1] > -1) {
        // 左边
        stack.push(-1)
      } else {
        // 右边
        while (stack[stack.length - 1] < 0) {
          stack.pop()
          stack.pop()
        }

        if (stack.length === 0) {
          break
        }

        stack.push(-2)
      }
    } else {
      stack.push(Number(list[i]))
    }

    if (stack.length === 0) {
      breack
    }

    i++
  }

  return i === list.length - 1 && stack.length === 0
};
```
