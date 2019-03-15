[question](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

从链表中删除倒数index的元素

解题：遍历列表，得到要删除元素的正向index

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (n === 0) return head;

  const count = getCount(head);
 const targetIndex = count - n;

  if (targetIndex === 0) {
    return head.next;
  }

  removeIndexTarget(head, targetIndex);
  return head;
};

var getCount = (head, n = 0) => {
  if (head === null) return n;

  return getCount(head.next, n + 1);
};

var removeIndexTarget = (head, removeIndex, currentIndex = 1) => {
  if (currentIndex === removeIndex) {
    head.next = head.next.next;
    return;
  }

  return removeIndexTarget(head.next, removeIndex, currentIndex + 1);
};
```
