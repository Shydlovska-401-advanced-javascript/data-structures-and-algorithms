'use strict';

function quickSort(items) {
    return quickSortHelper(items, 0, items.length - 1);
  }
  
  function quickSortHelper(items, left, right) {
    let index;
    if (items.length > 1) {
      index = partition(items, left, right);
  
      if (left < index - 1) {
  
        quickSortHelper(items, left, index - 1);
      }
  
      if (index < right) {
        quickSortHelper(items, index, right);
      }
    }
    return items;
  }
  
  function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)];
    while (left <= right) {
      while (pivot > array[left]) {
        left++;
      }
      while (pivot < array[right]) {
        right--;
      }
      if (left <= right) {
        let temp = array[left];
        array[left] = array[right];
        array[right] = temp;
        left++;
        right--;
      }
    }
    return left;
  }
  
  quickSort([8,4,23,42,16,15]);

  
  module.exports = quickSort;