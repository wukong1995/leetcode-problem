[question](https://leetcode.com/problems/binary-search-tree-iterator/)

我将树转换成一个数组去做，对象内部保存一个指针，我觉得这是最简单最偷懒的方法了。

我看了讨论区，有的是使用堆栈实现的，大致的思路是使用后序排序将树压入栈中，使用next的时候pop出一个元素，比我的想法好哎。

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.array = covertTreeToArr(root);
    this.cursor = -1;
};

var covertTreeToArr = (root, arr = []) => {
    if (root === null) return arr;
    
    covertTreeToArr(root.left, arr);
    arr.push(root.val);
    covertTreeToArr(root.right, arr);
    
    return arr;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.cursor++;
    return this.array[this.cursor];
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.cursor < this.array.length - 1;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
```