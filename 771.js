question: //leetcode question
var numJewelsInStones = function(J, S) {
    const jewelSet = new Set(J);
    let count = 0;
    
    for (let stone of S) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    
    return count;
}; 

answer: 
var numJewelsInStones = function(J, S) {
    const jewelSet = new Set(J);
    let count = 0;
    
    for (let stone of S) {
        if (jewelSet.has(stone)) {
            count++;
        }
    }
    
    return count;
};