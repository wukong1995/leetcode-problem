[question](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree)

将一个有序的链接转换成一个bst，和之前数组的那道题差不多，这个题的中重点是如何找到链表的中间点，使用快慢指针即可。

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if(head === null) return null;
  if (head.next === null) return new TreeNode(head.val)

  const middle = findMiddle(head);
  const root = new TreeNode(middle.val);
  // console.log('root', middle, 'head', head)
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(middle.next);

  return root;
};

var findMiddle = (head) => {
  let slow = head
  let fast = head
  let prev = null

  while(fast && fast.next) {
    pre = slow
    slow = slow.next
    fast = fast.next.next
  }
  pre.next = null
  return slow
}
```