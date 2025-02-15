question: //leetcode question
   
var numSmallerByFrequency = function(queries, words) {
    const f = s => s.replace(/[^a]/g, '').length;
    const counts = new Array(11).fill(0);
    for (const word of words) {
        counts[f(word)]++;
    }
    for (let i = 9; i >= 0; i--) {
        counts[i] += counts[i + 1];
    }
    return queries.map(query => counts[f(query) + 1]);
};

answer: numSmallerByFrequency(["cbd"], ["zaaaz"])