'use strict';

const BinaryTree = require('../../data-Structures/tree/tree.js')

let tree = new BinaryTree();

it('Can successfully instantiate an empty tree', () =>{
    expect(tree).toBeDefined();
})

it('Can successfully instantiate a tree with a single root node', () =>{
    tree.add(10);
    expect(tree.root.val).toBe(10);
})

it('Can successfully add a left child and right child to a single root node', () =>{
    tree.add(7)
    tree.add(11)
    expect(tree.root.left !== null).toBe(true);
    expect(tree.root.right !== null).toBe(true);
})


it('Can successfully return a collection from a preorder traversal', () =>{
    let arr = tree.preOrder();
    expect(arr).toEqual([10,7,11]);
  
})

it('Can successfully return a collection from an inorder traversal', () =>{
    expect(tree.inOrder()).toEqual([7,10,11]);
})

it('Can successfully return a collection from a postorder traversal', () =>{
    expect(tree.postOrder()).toEqual([7,11,10]);
})