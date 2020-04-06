[question](https://leetcode.com/problems/intersection-of-two-linked-lists)

找两个链表的交点
1. 先算出两个链表的长度
2. 长的链接先走n-m后，两个链表再一个一个的走


```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const lengthA = getLength(headA)
  const lengthB = getLength(headB)
  let distance = lengthA - lengthB

  while (distance > 0) {
    headA = headA.next
    distance--
  }

  while (distance < 0) {
    headB = headB.next
    distance++
  }

  while(headA !== null) {
    if (headA === headB) {
      return headA;
    }

    headA = headA.next
    headB = headB.next

  }

 return headA
};

var getLength = (head) => {
  let length = 0

  while(head !== null) {
    length += 1
    head = head.next
  }

  return length
}
```
