[question](https://leetcode.com/problems/partition-list)

给定一个链表和一个值x，对其进行分区，以使所有小于x的节点排在大于或等于x的节点之前。 您应该保留两个分区中每个分区中节点的原始相对顺序。

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  if (head === null || head.next === null) return head;

  let leftHead = null
  let left = null
  let rightHead = null
  let right = null

  while(head !== null) {
    // 往left中push
    if (head.val < x) {
      if(left === null) {
        left = {
          val: head.val,
          next: null
        }
        leftHead = left
      } else {
        left.next = {
         val: head.val,
         next: null
        }
        left = left.next
      }
    } else { // 往right中push
      if(right === null) {
        right = {
          val: head.val,
          next: null
        }
        rightHead = right
      } else {
        right.next = {
          val: head.val,
          next: null
        }
        right = right.next
      }
    }
    head = head.next
  }

  if (leftHead === null) {
    return rightHead
  }

  left.next = rightHead
  return leftHead
};
```
