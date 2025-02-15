// Below is the solution of one of the Leet Code question:
// Question: Leetcode question number 1: Two Sum 

Answer: 
```javascript 
var twoSum = function(nums, target) {
    var result = {};
    for (var i = 0; i < nums.length; i++) {
        if (result[nums[i]] >= 0) {
            return [ result[nums[i] ], i ];
        }
        result[target - nums[i]] = i;
    }
};
```