[question](https://leetcode.com/problems/tenth-line)

打印指定行，参考：https://stackoverflow.com/questions/6022384/bash-tool-to-get-nth-line-from-a-file

```
# Read from the file file.txt and output the tenth line to stdout.
sed "10q;d" file.txt
```

