const sort = require('../quick_sort/quick_sort')


it('should return array if array has only 1 element (edge case)', ()=>{
    expect(sort([1])).toEqual([1]);
})


it('should return sorted array(happy path)', ()=>{
    let arr = [3,2,5,7,13,11];
    expect(sort(arr)).toEqual([ 2, 3, 5, 7, 11, 13 ])
})