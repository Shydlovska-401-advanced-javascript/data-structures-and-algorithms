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
   breadthFirst(node){
     let arr = [];
     arr.push(node)
     let i = 0;
     while(i < arr.length){
       const temp = arr[i];
       if(temp.left){
         arr.push(temp.left)
       }
       if(temp.right){
         arr.push(temp.right)
       }
       i++
     }
     return arr.map(node=> node.val);
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
  console.log(tree.breadthFirst(node1));

  module.exports = {
      BinaryTree: BinaryTree,
      Node:Node
  }