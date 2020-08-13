// Solution for the my interview
// 1. Domain problem 
// Write a function which takes the matrix. Get the sum of each tow. Add sums to the new arr and retern new arr with sums.
                  // j[0], j[1], j[2]
// input = [ i[0] = >[1,    2,     3], 
//           i[1] => [3,    5,     7], 
//           i[2] => [1,    7,    10] ]	

// output =[6, 15, 18]


// input = [ [0, 1, 5], 
//         [-4, 7, 2], 
//         [-3, 12, 11] ]

// output= [6, 5, 20]



// 2. Pseude code

// 1. Create an empty array
// 2. Loop throw arrays
// 3. Declare the var for cont the sums
// 4. Add each sum to new arr
// 5. Return new arr this sums

function matrix(arr){
    let result = [];
    for (i=0; i< arr.length; i++){
      let sum =0;
      for(let j =0; j<arr[i].length; j++){
        sum+= arr[i][j];
      }
      result.push(sum);
  
    }
    return result;
  }
  
  // console.log(matrix([ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]))
  console.log(matrix([ [0, 1, 5],[-4, 7, 2],[-3, 12, 11] ]));
  
  // Big O:
  // time: O(n^2)
  // space:O(n)



  ////////////////////////////////////////
//   second challenge
n = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;

function fib(n){
  if(n === 0){
    return 0;
  }else if(n === 1 || n === 2){
    return 1;
  }else{
  return  fib(n - 1) + fib(n - 2)
  }
}

console.log(fib(9))

// n = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144;
function fib (n){
  let result;
  let a=1;
  let b =1;
  if(n===0){
    return 0;
  }else if(n === 1 || n === 2){
    return 1;
  }else{
    for(let i=3; i<=n; i++){
    result =a +b;
    a=b;
    b=result;

    }
    return result;
  }
}
console.log(fib(11))

// Big O 
// time:  O(n)
// space: O(1)