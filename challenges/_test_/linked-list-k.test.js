'use strict';

const LinkedList = require('../../data-Structures/linked-list.js')

it('Where k is greater than the length of the linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.append('c');
    expect( linkedlist.findK('10')).toBe('Not in the list!');
});

it('Where k and the length of the list are the same', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.append('c');
    linkedlist.append('d');
    expect(linkedlist.findK(3)).toBe('b');
});

it('Where k is not a positive integer', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.append('c');
    linkedlist.append('d');
    expect( linkedlist.findK('10')).toBe('Not in the list!');
});

it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insert('c'); 
    expect(linkedlist.findK('1')).toBe('b');
});

