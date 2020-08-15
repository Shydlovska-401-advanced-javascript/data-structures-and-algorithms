'use strict';

function binarySearch (arr, val) {
    if(!val){
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
  
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === val) {
        return mid;
      } else if (arr[mid] < val) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    
    }
    return -1;
  }

  module.exports = binarySearch;
  
//   binarySearch([1, 2, 3, 4, 5, 6, 9], 3);