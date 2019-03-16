[question](https://leetcode.com/problems/reverse-linked-list-ii/)

反转从m到n的链表

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if(m === n) return head;

  let startPrevNode = null;
  let startNode = null;
  let currentNode = head;
  let reverseHeadNode = null;
  let index = 1;

  while(index < m) {
    startPrevNode = currentNode;
    currentNode = currentNode.next;
    index++;
  }
  reverseHeadNode = startNode = currentNode;

  while(index < n) {
    index++;
    currentNode = startNode.next;

    startNode.next = currentNode.next;
    currentNode.next = reverseHeadNode;
    reverseHeadNode = currentNode;
  }

  if (startPrevNode) {
    startPrevNode.next = reverseHeadNode;
    return head;
  } else {
    return reverseHeadNode;
  }
};
```
