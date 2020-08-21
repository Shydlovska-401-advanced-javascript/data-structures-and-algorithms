class Node{
    constructor(val, next=null){
      this.val = val;
      this.next = next;
    }
  }
  class Stack{
    constructor(){
      this.top = null;
      this.size =0;
    }
  
    push(val){
    this.top = new Node(val, this.top)
    this.size +=1;
    }
    pop(){
      if(!this.top){
        return 'Stack is empty';
      }
      let poped =this.top;
      this.top = this.top.next;
      this.size-=1;
      return poped.val;
      
    }
    peek(){
       if(!this.top){
        return 'Stack is empty';
      }else{
        return this.top.val;
      }
    }
    isEmpty(){
      if(!this.top){
        return true;
      }else{
        return false;
      }
  
    }
  }


  class Queue{
    constructor(){
      this.front = null;
      this.tail = null;
      this.size =0;
    }
    enqueue(val){
      if(!this.front){
        this.front = new Node(val);
        this.tail = this.front;
      }else{
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
      }
      this.size +=1;
     
    }
    dequeue(){
      if(!this.front){
        return 'Empty queue';
      }
      let poped = this.front;
      this.front = this.front.next;
      this.size -=1;
      return poped.val;
    }
    peek(){
    if(!this.front){
      return 'Empty queue'
    }else{
      return this.front.val;
    }
  }
    isEmpty(){
      if(!this.front){
        return true
      }else{
        return false;
      }
  
    }
  }
  let stack = new Stack();
  // stack.push(1)
  // stack.push(2)
  // stack.push(3)
  // // stack.peek();
  // // stack.pop()
  // // console.log(stack)
  // console.log(stack.isEmpty())
  
  let queue = new Queue();
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  // console.log(queue)
  queue.dequeue();
  queue.peek()
  // console.log(queue)
  console.log(queue.isEmpty())


  module.exports = {
    Stack : Stack,
    Queue : Queue
  }
  