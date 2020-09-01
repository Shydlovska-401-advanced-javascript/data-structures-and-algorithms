'use strict';

const BinaryTree = require('../binaryTree/findMax.js')

let tree = new BinaryTree.BinaryTree();

let node1 = new BinaryTree.Node(3)
let node2 = new BinaryTree.Node(5)
let node3 = new BinaryTree.Node(10)
let node4 = new BinaryTree.Node(1)
let node5 = new BinaryTree.Node(8)
tree.root = node1;


node1.left = node3;
node1.right = node5;
node3.left = node4;
node4.right = node2;

it('Happy path', () =>{
    
    expect(tree.findMax()).toBe(10);
  
});

it('Edge case', () =>{
    let emptyTree = new BinaryTree.BinaryTree();

    expect(emptyTree.findMax()).toBe(undefined);
})
