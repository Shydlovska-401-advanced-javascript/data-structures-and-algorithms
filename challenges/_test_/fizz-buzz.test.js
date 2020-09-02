'use strict';

const Ktree = require('../../data-Structures/fizz-buzz/fizz-buzz.js');



it('Happy path', () =>{
    const tree = new Ktree.Ktree();


let node1 = new Ktree.Node(3)
let node2 = new Ktree.Node(5)
let node3 = new Ktree.Node(10)
let node4 = new Ktree.Node(1)
let node5 = new Ktree.Node(8)
let node6 = new Ktree.Node(15)
tree.root = node1;


node1.childrens = [node3, node4, node5, node2];
node2.childrens = [node6]
    
    expect(tree.fizzBuzzTree(node1)).toEqual([ 'Fizz', 'Buzz', '1', '8', 'Buzz', 'FizzBuzz' ]);
  
});

it('Edge case', () =>{
let emptyTree = new Ktree.Ktree();
let node = new Ktree.Node(3)
let nodeOne = new Ktree.Node(null)
let nodeTwo = new Ktree.Node(10)
let nodeThree = new Ktree.Node(1)
let nodeFour = new Ktree.Node(8)
let nodeFive = new Ktree.Node(15)
emptyTree .root = node;


node.childrens = [nodeTwo, nodeThree, nodeFour, nodeOne];
nodeOne.childrens = [nodeFive]

    expect(emptyTree.fizzBuzzTree(node)).toBe('Empty');
})
