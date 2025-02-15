Question: 
// leetcode #51: N-Queens

/* 
   The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens
   threaten each other. Given an integer n, return all distinct solutions to the n-queens puzzle.

   Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' indicates
   a queen and '.' indicates an empty space.
*/

Answer:

```javascript
var solveNQueens = function(n) {
    var res = [];
    var board = Array.from({length: n});
    for(let i = 0; i < n; i++){
        board[i] = Array.from({length: n}, () => '.');
    }
    
    var check = function(board, row, col){
        for(let i = 0; i < row; i++){
            for(let j = 0; j < n; j++){
                if(board[i][j] == 'Q' && (j == col || i+j == row+col || i-j == row-col)){
                    return false;
                }
            }
        }
        return true;
    }
    
    var solve = function(board, rowIndex){
        if(rowIndex == n){
            let result = board.map(row => row.join(''));
            res.push(result);
            return;
        }
        for(let i = 0; i < n; i++){
            if(check(board, rowIndex, i)){
                board[rowIndex][i] = 'Q';
                solve(board, rowIndex + 1);
                board[rowIndex][i] = '.';
            }
        }
    }
    
    solve(board, 0);
    return res;
};
```
Here, the solution is created as a main function solveNQueens which accepts an integer n as a parameter. It prepares an initial board and then applies a checking function to every square to make sure no queens are in the same line vertically, horizontally, or diagonally. The solve function then finds all placements for a queen in each row, backtracking when no valid placements can be found.