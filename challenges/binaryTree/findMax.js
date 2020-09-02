class Node{
    constructor(val, left= null, right=null){
      this.val = val;
      this.left = left;
      this.right =right;
    }
  }
  
  class BinaryTree{
    constructor(){
      this.root = null;
     
    }
  
    findMax(){
      let arr = []
      this._find(this.root, arr);
      return arr[0];
      }
    
    
     _find(root, arr){
      if(!root){
         return "empty!!!";
      }
       if(arr.length === 0) {
         arr.push(root.val);
       } else {
         arr.push(this.max(root.val, arr.pop()));
       }
      this._find(root.left, arr);
      this._find(root.right, arr);    
        }
  
  // }
  max(num1, num2){
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  }
  
  
  
  
  let node1 = new Node(3)
  let node2 = new Node(5)
  let node3 = new Node(10)
  let node4 = new Node(1)
  let node5 = new Node(8)
  let tree = new BinaryTree();
  tree.root = node1;
  
  
  node1.left = node3;
  node1.right = node5;
  node3.left = node4;
  node4.right = node2;
  // console.log(tree)
  console.log(tree.findMax());

  module.exports = {
      BinaryTree: BinaryTree,
      Node: Node
  }
  
  
  
  
  
  
  