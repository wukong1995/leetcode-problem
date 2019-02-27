[question](https://leetcode.com/problems/merge-two-sorted-lists/)

链表，感觉c++会更简单一些

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @param {ListNode} resLink
 * @return {ListNode}
 */
const getFinnalNode = (link) => {
  if (link.next === null) {
    return link;
  }

  return getFinnalNode(link.next);
}

const setNext = (link, value) => {
  if (link === null) {
    link = {
      val: value,
      next: null
    };
  } else{
    const finnalNode = getFinnalNode(link);
    finnalNode.next = {
      val: value,
      next: null
    }
  }
  return link;
}

const recursiveMerge = (l1, l2, resLink = null) => {
  if (l1 === null && l2 === null) return resLink;
  if (l1 === null && resLink === null) return l2;
  if (l2 === null && resLink === null) return l1;

  if (l1 === null) {
    getFinnalNode(resLink).next = l2;
    return resLink;
  }

  if (l2 === null) {
    getFinnalNode(resLink).next = l1;
    return resLink;
  }

  if (l1.val <= l2.val) {
    resLink = setNext(resLink, l1.val);
    return recursiveMerge(l1.next, l2, resLink);
  } else {
    resLink = setNext(resLink, l2.val);
    return recursiveMerge(l2.next, l1, resLink);
  }
}

const mergeTwoLists = recursiveMerge

```
