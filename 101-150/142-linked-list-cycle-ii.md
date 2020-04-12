[question](https://leetcode.com/problems/linked-list-cycle-ii)

求成环的那个节点，141的解法也可以，但是这个题目不让修改数组，只能使用快慢指针。
快慢指针到达某个节点的时候一定表示有环

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
var detectCycle = function (head) {
 let fast = head
 let slow = head

 while(fast && fast.next) {
     slow = slow.next
     fast = fast.next.next

     if (slow === fast) {
         break
     }
 }

  if (!fast || !fast.next) return null

  slow = head
  while(slow !== fast) {
      slow = slow.next
      fast = fast.next
  }
  return fast
}

```
