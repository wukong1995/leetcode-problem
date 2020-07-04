[question](https://leetcode.com/problems/delete-node-in-a-linked-list)

删除链表中的一个节点，以前的做法是prevNode.next = node.next，但是这个题目中无法得到preNode，只能采用下一个节点替代当前节点

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    const nextNode = node.next
    node.val = nextNode.val
    node.next = nextNode.next
};
```
