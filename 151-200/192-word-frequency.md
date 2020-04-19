[question](https://leetcode.com/problems/word-frequency)

查看一个文本中单词出现的频率，参见：https://stackoverflow.com/questions/10552803/how-to-create-a-frequency-list-of-every-word-in-a-file

```bash
tr -s ' ' '\n' < words.txt | sort | uniq -c | sort -r | awk '{print $2, $1}'
```
