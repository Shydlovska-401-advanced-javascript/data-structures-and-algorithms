'use strict';

const sort = require('../merge_sort/merge_sort')


it('should return null if array is empty (edge case)', ()=>{
    expect(sort.mergeSort([])).toBe('Empty input');
})


it('should return sorted array(happy path)', ()=>{
    let arr = [3,2,5,7,13,11];
    let sortedArr = sort.mergeSort(arr);
    expect(sortedArr).toEqual([ 2, 3, 5, 7, 11, 13 ])
})