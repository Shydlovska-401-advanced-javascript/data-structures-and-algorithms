'use strict';

// const Node = require('./linked-list.js');
const listHelper = require('../llzip/ll-zip.js');

it('“Happy Path” - Expected outcome', () => {
    const list1  = new listHelper.LinkedList();
    const list2 = new listHelper.LinkedList();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    list1.insert(4);
    list2.insert(10)
    list2.insert(20)
    list2.insert(30)
    list2.insert(40)
    listHelper.zipList(list1, list2)
    expect(list1.toString()).toBe('{ 4 } -> { 40 } -> { 3 } -> { 30 } -> { 2 } -> { 20 } -> { 1 } -> { 10 } -> NULL');
});


it('Edge Case ', () => {
    const list1  = new listHelper.LinkedList();
    const list2 = new listHelper.LinkedList();
    list1.insert(1);
    list1.insert(2);
    list1.insert(3);
    list1.insert(4);
    expect(listHelper.zipList(list1, list2)).toBe(undefined);


});

it('Expected Expected failure', () => {
    const list1  = new listHelper.LinkedList();
    const list2 = new listHelper.LinkedList();
    expect(listHelper.zipList(list1, list2)).toBeFalsy();
})


