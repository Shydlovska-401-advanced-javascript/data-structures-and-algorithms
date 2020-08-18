'use strict';

class Node {
    constructor(val, next =null){
     this.val= val;
     this.next = next;
    }
  }
  class LinkedList{
    constructor(){
    this.head = null;
    this.size =0;
  
    }
    insert(num){
      let newNode = new Node(num)
      if(this.head === null){
        this.head = newNode;
      }else{
        let current = this.head;
       this.head = newNode;
       this.head.next = current;
     }
     this.size++;
    }
  
  includes(val){
   let current = this.head;
   if(!this.head){
     return 'Linkedlist is empty!!!'
   }
   while(current){
     if(current.val === val){
        return true;
     } else{
       current = current.next;
     }
   }
   return false;
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

    append(val){
      let appended = new Node(val);
      if(this.head === null){
        this.head = appended;
      }else{
        let current = this.head;
        while(current.next){
          current = current.next;
        }
        current.next = appended;
        this.size++;
      }
    }

    insertBefore(val, newVal){
      let inserted = new Node(newVal);
      if( this.head.val === val){
      this.insert(newVal);
      }else{
      let current = this.head;
      let next = current.next;
      while(next){
        if(next.val === val){
        inserted.next = next;
        current.next = inserted;
        }
        current = next;
        next = next.next;
      } 
      }
      this.size++;
    }

    insertAfter(val, newVal){
      let inserted = new Node(newVal);
      let current = this.head;
      let next = current.next
      let flag = false;
       while(next){
         if(current.val === val){
           current.next = inserted;
           inserted.next = next;
           flag = true;  
         }
         current = current.next;
         next = next.next;
       }
        if(!flag){
           this.append(newVal)
        }else{
            this.size++;
         }
  } 

  findK(k){
    if(this.size < k || k < 0){
      return 'Not in the list!'
    }
    let current = this.head;
    let counter = this.size - k -1;
    while(counter > 0){
      console.log('here',counter)
    current = current.next;
    counter--;
    }
    return current.val;
    }   
}
  
  let node = new LinkedList();
  // node.insert('a')
  // node.insert('b')
  // node.insert('c');
  // console.log(node.includes('b'))
  
  // console.log(node);
// newList.append(5)
// newList.insertBefore(1, 6)
// newList.insertBefore(3, 8)
// newList.insertAfter(8, 0)
// newList.insertAfter(0, 9)
// console.log(newList.findK(11))
// newList.toString()
  // console.log(node.toString())

  module.exports = Node;
  module.exports = LinkedList;