'use strict';
const sort = require('../insertion_sort/insertion_sort.js');

it('should return null if array is empty (edge case)', ()=>{
    expect(sort([])).toBe(null);
})

it('should return false if array containst different val(expected failure)', ()=>{
    expect(sort(['a',13])).toBe(false);
})

it('should return sorted array(happy path)', ()=>{
    expect(sort([2,3,5,7,13,11])).toEqual([ 2, 3, 5, 7, 11, 13 ]);
})