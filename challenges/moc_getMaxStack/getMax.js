'use strict';

class Stack {

    constructor() {
  
      this.maxStack = [];
      this.max = 0;
    }
   getMax(n){
     return  this.max;
  
   }
   push(n){
     if(this.max === 0) {
       this.max =n
     }
     this.maxStack.push([n, this.max])
    if(this.max< n){
      this.max = n;
      }
   }
  
   pop(){
     let toReturn = this.maxStack.pop()
     this.max = toReturn[1];
   return toReturn[0];
  
  
   }
  }
  