'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search.js');

test('Edge Case', () => {
    expect(binarySearch(['x', 'x', 'x'], null)).toBe(-1);
});
test('test when val is not in arr', () => {
    const startArray = ['x', 'x', 'x', 'x'];
    const result = binarySearch(startArray, 'y');
    expect(result).toBe(-1);
})
it('should return index of the val', () => {
    const startArray = ['x', 'x', 'y', 'x'];
    const result = binarySearch(startArray, 'y');
    expect(result).toBe(2);
});
