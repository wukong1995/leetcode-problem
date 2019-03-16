[question](https://leetcode.com/problems/reverse-linked-list/)

这个是反转整个链表，比92题简单

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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if(head === null || head.next === null) return head;

  let startNode = head;
  let currentNode = head;
  let reverseHeadNode = head;

  while (startNode.next !== null) {
    currentNode = startNode.next;
    startNode.next = currentNode.next;
    currentNode.next = reverseHeadNode;
    reverseHeadNode = currentNode;
  }

  return reverseHeadNode;
};

```
