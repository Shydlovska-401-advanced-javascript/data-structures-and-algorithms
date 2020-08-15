'use strict';


function insertShiftArray(arr, val){
    if(!val){
        return false;
    }
    let newArr =[];
    let mid;
    if(arr.length % 2 === 0){
    mid = arr.length/2;
    } else{
      mid = (arr.length +1)/2;
    }
    for(let i =0; i< mid; i++){
      newArr.push(arr[i]);
    }
      newArr.push(val);
    for(let j =mid; j< arr.length; j++){
      newArr.push(arr[j])
    }
    return newArr;
    };
    
    // insertShiftArray([2,4,6,8], 5) //[2,4,5,6,8]
    // console.log(shiftArray([4,8,15,23,42], 16)) //	[4,8,15,16,23,42]

    module.exports = insertShiftArray;