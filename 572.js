question: //Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    
    const findDiameter = function(node) {
        if (!node) {
            return 0;
        }
        
        let left = findDiameter(node.left);
        let right = findDiameter(node.right);
        
        maxDiameter = Math.max(maxDiameter, left + right);
        
        return Math.max(left, right) + 1;
    }
    
    findDiameter(root);
    
    return maxDiameter;
}; 

answer: diameterOfBinaryTree(root)