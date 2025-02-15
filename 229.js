// Question: Majority Element II (229 - LeetCode)

function majorityElement(nums) {
    let count1 = 0, count2 = 0, candidate1 = 0, candidate2 = 1;
    
    for (let num of nums) {
        if (num == candidate1) count1++;
        else if (num == candidate2) count2++;
        else if (count1 == 0) { candidate1 = num; count1 = 1; }
        else if (count2 == 0) { candidate2 = num; count2 = 1; }
        else { count1--; count2--; }
    }

    count1 = 0, count2 = 0;
    for (let num of nums) {
        if (num == candidate1) count1++;
        else if (num == candidate2) count2++;
    }

    let len = nums.length;
    let result = [];
    if (count1 > len/3) result.push(candidate1);
    if (count2 > len/3) result.push(candidate2);
    
    return result;
}