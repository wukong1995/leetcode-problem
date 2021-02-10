[question](https://leetcode.com/problems/peeking-iterator)

在Iterator基础上加上一个peek的方法；多加一个peekIte属性来保存peek的数

```js
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
   this.iterator = iterator;
   this.peekIte = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
    if (this.peekIte) return this.peekIte;

    if (this.iterator.hasNext()) {
      this.peekIte = this.iterator.next();
      return this.peekIte;
    }
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
    if (this.peekIte) {
        const temp = this.peekIte
        this.peekIte = null;
        return temp;
    }

    return this.iterator.next();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
    if (this.peekIte) {
        return true
    }

    return this.iterator.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
```
