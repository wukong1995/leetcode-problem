[question](https://leetcode.com/problems/implement-trie-prefix-tree)

使用数组模拟

```js
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.data = []
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
   this.data.push(word)
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return this.data.indexOf(word) !== -1
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
   return this.data.findIndex(item => new RegExp(`^${prefix}`).test(item)) > -1
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
```
