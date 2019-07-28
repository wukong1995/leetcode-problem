[question](https://leetcode.com/problems/rotate-list)

旋转数组

```
Input:  1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
```

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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if(head === null || head.next === null) return head

  let current = head;
  let depth = 0;
  while(current !== null){
      depth += 1;
      current = current.next;
  }
  k = k%depth;

  while(k > 0){
      current = head;
      while(current.next.next !== null){
          current = current.next
      }
      temp = current.next;
      current.next = null;
      temp.next = head;
      head = temp;
      k -= 1
  }
  return head
};
```