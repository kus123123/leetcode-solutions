question: //leetcode question
var findUnsortedSubarray = function(nums) {
    let sortedNums = [...nums].sort((a, b) => a - b);
    let start = 0;
    let end = nums.length - 1;
    
    while (nums[start] === sortedNums[start] && start < nums.length) {
        start++;
    }
    
    while (nums[end] === sortedNums[end] && end >= 0) {
        end--;
    }
    
    return end - start >= 0 ? end - start + 1 : 0;
};  

answer: findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]);  // Output: 5