'use strict';

function multiBracketValidation(input){
    if(input.length===0){
      return false;
    }
  
    let open= '([{';
    let closed = ')]}';
  
    let stack =[];
    for (let i=0; i< input.length; i++){
      if(open.includes(input[i])){
        stack.push(input[i])
      } else if(closed.includes(input[i])){
        let temp = stack[stack.length-1];
        if(open[closed.indexOf(input[i])]=== temp){
          // console.log(stack)
          stack.pop();
        }else{
          return false;
        }
      }
    }
    if(stack.length === 0){
     
      return true;
    }
    
  }


  module.exports = multiBracketValidation;