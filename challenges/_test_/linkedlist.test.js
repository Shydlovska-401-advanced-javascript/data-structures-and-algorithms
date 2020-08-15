'use strict';

// const Node = require('./linked-list.js');
const LinkedList = require('../../data-Structures/linked-list.js')


// 

// 

// 

it('Can successfully instantiate an empty linked list', () => {
    const linkedlist = new LinkedList();
    expect(linkedlist !== null).toBe(true);
});

it('Can properly insert into the linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    expect(linkedlist.head !== null).toBe(true);
});

it('The head property will properly point to the first node in the linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    expect(linkedlist.head.val).toBe('a');
});

it('Can properly insert multiple nodes into the linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insert('c');
    expect(linkedlist.size).toBe(3)
});

it('Will return true when finding a value within the linked list that exists', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insert('c');
    expect(linkedlist.includes('c')).toBe(true)
});
it('Will return false when searching for a value in the linked list that does not exist', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insert('c');
    expect(linkedlist.includes('d')).toBe(false)
});

it('Can properly return a collection of all the values that exist in the linked list', () => {
    const linkedlist = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insert('c');
    expect(linkedlist.toString()).toBe('{ a } -> { b } -> { c } -> NULL')
});
