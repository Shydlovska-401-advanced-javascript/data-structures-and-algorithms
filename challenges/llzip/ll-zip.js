'use strict';
class Node{
    constructor(val){
    this.val = val;
    this.next = null;
    }
  }
  class LinkedList{
    constructor(){
      this.head = null;
      this.size = 0;
    }
  insert(num){
        let newNode = new Node(num)
        if(this.head === null){
          this.head = newNode;
        }else{
         let current = this.head;
        this.head = newNode;
        this.head.next = current;
        this.size++;
      }
  }
  toString(){
    if (this.head === null) {
          throw new Error('Linked list is empty ;(');
        }
        let st = [];
        let node = this.head;
        while (node) {
          st.push("{ " + node.val + " }");
          node = node.next;
        }
        st.push('NULL');
        return st.join(' -> ');
      }
}

function zipListHelper(node1, node2){
    if(!node1 || !node2){
      return;
    }

    if(!node1 && !node2){
      return false;
    }
  
   let temp = node1.next;
   node1.next = node2;
  node2.next = zipListHelper(temp, node2.next);
  return node1;
  }
  
  function zipList(listOne, listTwo) {
    return zipListHelper(listOne.head, listTwo.head);
  }


  module.exports = {
    LinkedList : LinkedList,
    zipList : zipList, 
    zipListHelper : zipListHelper 

  }

