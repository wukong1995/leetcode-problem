[question](https://leetcode.com/problems/linked-list-cycle/)

查看链表是否有循环。解题思路：将每个节点都指向head，如果循环过程中再次遇到head则有循环，反之，无。

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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if(head === null || head.next === null) return false;
  let node = head;
  let temp;

  while(node !== null) {
    if(node.next === head) {
      return true;
    }

    temp = node.next;
    node.next = head;
    node = temp;
  }

  return false;
};
```