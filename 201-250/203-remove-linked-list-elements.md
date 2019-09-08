[question](https://leetcode.com/problems/peak-index-in-a-mountain-arrayremove-linked-list-elements)

移除链表中所有相等的值

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let newHead = head
  let pre = null
  let cur = head

  while(cur !== null) {

    if (cur.val === val) {
      cur = cur.next

      if (pre !== null) {
        pre.next = cur
      } else {
        newHead = cur
      }
    } else {
      pre = cur
      cur = cur.next
    }
  }

  return newHead
};
```