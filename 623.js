question: //leetcode question   

var addOneRow = function(root, v, d) {
    if(d === 1) {
        const newRoot = new TreeNode(v);
        newRoot.left = root;
        return newRoot;
    }
    
    const dfs = (node, depth) => {
        if(!node) return;
        
        if(depth === d - 1) {
            const leftNode = new TreeNode(v);
            const rightNode = new TreeNode(v);
            leftNode.left = node.left;
            rightNode.right = node.right;
            
            node.left = leftNode;
            node.right = rightNode;
            return;
        }
        
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    }
    
    dfs(root, 1);
    
    return root;
};

answer: addOneRow(root, v, d)