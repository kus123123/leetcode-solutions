Question: LeetCode question 696
Answer:

```javascript
var countBinarySubstrings = function(s) {
    var prev = 0, current = 1, result = 0;
    for (var i = 1; i < s.length; i++) {
        if (s[i - 1] != s[i]) {
            result += Math.min(prev, current);
            prev = current;
            current = 1;
        } else {
            current++;
        }
    }
    return result + Math.min(prev, current);
};
```