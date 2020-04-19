[question](https://leetcode.com/problems/transpose-file)

参见：https://unix.stackexchange.com/questions/169995/rows-to-column-conversion-of-file

```
# Read from the file file.txt and print its transposed content to stdout.
awk '{ for (i=1; i<=NF; i++) RtoC[i]= (RtoC[i]? RtoC[i] FS $i: $i) }
    END{ for (i in RtoC) print RtoC[i] }' file.txt
```

