'use strict';

const treeSearch = require('./tree-intersection.js')

class Node {
    constructor(val, left=null,right=null){
      this.val = val;
      this.right= right;
      this.left = left;
    }
   }
   
  


   it('“Happy Path” ', () => {
   let node1= new Node(3)
   let node2= new Node(5)
   let node3= new Node(10, node1, node2);
   node2.left = new Node(45);
   
   
   let node4 = new Node(3)
   let node5=new Node(25)
   let node6=new Node(5)
   node6.left = node4;
   node6.right =node5;
    expect(treeSearch(node3, node6)).toEqual([5,3])
});


it('Edge case', () => {
    let node1= new Node(3)
    let node2= new Node(5)
    let node3= new Node(10, node1, node2);
    node2.left = new Node(45);
    
    
    let node4 = new Node(13)
    let node5=new Node(25)
    let node6=new Node(7)
    node6.left = node4;
    node6.right =node5;
    expect(treeSearch(node3, node6)).toEqual([])
});