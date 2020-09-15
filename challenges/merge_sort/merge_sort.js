function merge(arr1, arr2){
    let result = []; // the array to hold results.
    let i = 0; 
    let j = 0;
  
    while(i < arr1.length && j < arr2.length){

  // compare the elements one at a time.
      if(arr1[i] > arr2[j]) {
        result.push(arr2[j]);
        j++;
      } else {
        result.push(arr1[i]);
        i++;
      }
    }
    // these other while loops checks if there's some item left
   // in the arrays so that we can push their elements in the result array.
    while(i < arr1.length){
      result.push(arr1[i]);
      i++;
    }
  
    while(j < arr2.length){
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  
  function mergeSort(arr){
    if(arr.length === 0){
      return 'Empty input';
    }
  
    if(arr.length <= 1) return arr;
    let halfPoint = Math.ceil(arr.length / 2);
    let firstHalf = mergeSort(arr.splice(0, halfPoint));
    let secondHalf = mergeSort(arr.splice(-halfPoint));
    console.log(firstHalf,'first', secondHalf, 'second')
  
  // merge the array back and return the result.
  // note that we are using the helper function we created above.
    return merge(firstHalf, secondHalf);
  }
  
  
//   console.log(mergeSort([8,4,23,42,16,15]))

module.exports = {
    merge:merge,
    mergeSort:mergeSort,
}


//solution 2

//   // top-down implementation
// function merge(left, right) {
//     let arr = [];
  
//     while (left.length && right.length) {
//       if (left[0] < right[0]) {
//         arr.push(left.shift());
//       } else {
//         arr.push(right.shift());
//       }
//     }
//     return arr.concat(left.slice().concat(right.slice()));
//   }
  
//   function mergeSort(arr) {
//     if (arr.length < 2) {
//       return arr;
//     }
  
//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);
  
//     return merge(mergeSort(left), mergeSort(right));
//   }
  
//   const array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
//   console.log(mergeSort(array));