// Tree Node structure
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Build the example tree:
//        A
//       / \
//      B   C
//     / \   \
//    D   E   F

const root = new TreeNode("A");
root.left = new TreeNode("B");
root.right = new TreeNode("C");
root.left.left = new TreeNode("D");
root.left.right = new TreeNode("E");
root.right.right = new TreeNode("F");

function DFS(root) {
  if (!root) return [];
  
  const result = [];
  const stack = [root]; // Start with root in stack
  
  while (stack.length > 0) {
    // Pop from top (LIFO)
    const node = stack.pop();
    result.push(node.value);
    
    // Push children to top (right first, so left is processed first)
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  
  return result;
}

console.log("DFS (deep first):", DFS(root));
// Output: ['A', 'B', 'D', 'E', 'C', 'F']

function searchDFS(root, query) {
  if (!root) return [];

  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    if (node.value === query) return true;

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return false;
}

console.log(searchDFS(root, 'E')) // should return true
console.log(searchDFS(root, 'Z')) // should return false
