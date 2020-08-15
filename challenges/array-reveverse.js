
'use strict';
// O(n)
function arrayReverese(arr){
  let i =0;
  let j =arr.length-1;
  while(i <= j){
    console.log(i,j)
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   i++;
   j--;
  }
  return arr;
}
arrayReverese([0,1, 2, 3, 4, 5, 6,7])


//  second solution
// O(n)
// function arrayReverese(arr){
//   let newArr =[];
//   for(let i= arr.length-1; i>=0; i--){
//     newArr.push(arr[i])
//   }
//     return arr;
//   }
  
  
  
//   arrayReverese([0,1, 2, 3, 4, 5, 6,7])