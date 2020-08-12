'use strict';

const insertShiftArray = require('../arrayShift/array-shift.js');

test('Edge Case', () => {
    expect(insertShiftArray(['x', 'x'], null)).toBe(false);
});
test('length should increase by 1', () => {
    const startArray = ['x', 'x', 'x', 'x'];
    const resultArray = insertShiftArray(startArray, 'y');
    expect(resultArray.length).toBe(startArray.length + 1);
})
it('should not modify the original', () => {
    const startArray = ['x', 'x', 'x', 'x'];
    insertShiftArray(startArray, 'y');
    expect(startArray.length).toBe(4);
});
it('Expected failure', () => {
    // init
    const startArray = ['x', 'x', 'x', 'x'];
    const resultArray = insertShiftArray(startArray, 'y');

    const expectedAray = ['x', 'x', 'y' ,'x', 'x'];
    const unexpectedAray = ['x', 'y', 'x' ,'x', 'x'];
    // test
    expect(arraysMatch(resultArray, expectedAray)).toBe(true);
    expect(arraysMatch(resultArray, unexpectedAray)).toBe(false);

});

var arraysMatch = function (arr1, arr2) {

	// Check if the arrays are the same length
	if (arr1.length !== arr2.length) return false;

	// Check if all items exist and are in the same order
	for (var i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}

	// Otherwise, return true
	return true;

};