class Node{
    constructor(val, childrens=[]){
      this.val = val;
      this.childrens = childrens;
    }
  }
  
  class Ktree{
    constructor(){
      this.root = null;
     
    }
   fizzBuzzTree(node){
     let arr = [];
     arr.push(node)
     let i = 0;
     while(i < arr.length){
       const temp = arr[i];
       if(!temp.val){
           return "Empty"
       }
       if(temp.val % 3 === 0 && temp.val % 5===0){
        temp.val = "FizzBuzz"
       }else if(temp.val % 3 === 0){
         temp.val = "Fizz"
       }else if(temp.val % 5===0){
         temp.val = "Buzz"
       }else{
         temp.val = temp.val.toString()
       }
       
       if(temp.childrens.length > 0){
        //  console.log(temp.childrens);
         arr = arr.concat(temp.childrens);
       }
       i++
     }
     return arr.map(node => node.val);
   }
  
  
  }
  
  
  let node1 = new Node(3)
  let node2 = new Node(5)
  let node3 = new Node(10)
  let node4 = new Node(1)
  let node5 = new Node(8)
  let node6 = new Node(15)
  let tree = new Ktree();
  tree.root = node1;
  
  
  node1.childrens = [node3, node4, node5, node2];
  node2.childrens = [node6]
  // console.log(tree)
  console.log(tree.fizzBuzzTree(node1));
  console.log(tree.root.childrens);

  module.exports = {
    Ktree:Ktree,
      Node:Node
  }