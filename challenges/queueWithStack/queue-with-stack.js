// class Node{
//     constructor(val, next=null){
//       this.val = val;
//       this.next = next;
//     }
//   }
//   class Stack{
//     constructor(){
//       this.top = null;
//     }
  
//     push(val){
//     this.top = new Node(val, this.top)
//     }
//     pop(){
//       if(!this.top){
//         return 'Stack is empty';
//       }
//       let poped =this.top;
//       this.top = this.top.next;
//       return poped.val;
  
//     }
//     peek(){
//        if(!this.top){
//         return 'Stack is empty';
//       }else{
//         return this.top.val;
//       }
//     }
//     isEmpty(){
//       if(!this.top){
//         return true;
//       }else{
//         return false;
//       }
  
//     }
//   }

const StackAndQueue = require('../../data-Structures/stack-queue/stack_queue.js')
  

class PseudoQueue{
    constructor(){
      this.stack1 = new StackAndQueue.Stack();
     this.stack2 = new StackAndQueue.Stack();
  
    }
    enqueue(val){
     this.stack1.push(val);
    }
  
    dequeue(){
    while(!this.stack1.isEmpty()){
      this.stack2.push(this.stack1.pop());
    }
    let toReturn = this.stack2.pop();
    while(!this.stack2.isEmpty()){
      this.stack1.push(this.stack2.pop());
    }
    return toReturn;
    }
  }
  
  
  let pQ = new PseudoQueue();
  
//   pQ.enqueue(1);
//   pQ.enqueue(2);
//   pQ.enqueue(3);
//   pQ.enqueue(4);
//   console.log(pQ)
  
//   console.log(pQ.dequeue());

module.exports = PseudoQueue;