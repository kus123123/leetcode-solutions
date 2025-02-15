question: //leetcode question

var canPartition = function(nums) {
    const total = nums.reduce((a, b) => a + b, 0);
    if (total % 2 !== 0) return false;
    
    const target = total / 2;
    const dp = Array(target + 1).fill(false);
    dp[0] = true;
    
    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }
    
    return dp[target];
}; 

answer: canPartition(nums);