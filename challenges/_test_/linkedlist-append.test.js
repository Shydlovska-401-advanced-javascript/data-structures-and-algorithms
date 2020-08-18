'use strict';

const LinkedList = require('../../data-Structures/linked-list.js')


it('Can properly append node to the end of list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.append('c');
    expect(linkedlist.toString()).toBe('{ b } -> { a } -> { c } -> NULL');
});

it('Can successfully add multiple nodes to the end of a linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.append('c');
    linkedlist.append('d');
    expect(linkedlist.toString()).toBe('{ b } -> { a } -> { c } -> { d } -> NULL');
});

it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insertBefore('a', 3);
    expect(linkedlist.toString()).toBe('{ b } -> { 3 } -> { a } -> NULL');
});

it('Can successfully insert a node before the first node of a linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insertBefore('b', 'first');
    expect(linkedlist.toString()).toBe('{ first } -> { b } -> { a } -> NULL');
});

it('Can successfully insert after a node in the middle of the linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('c');
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insertAfter('a', 'd');
    expect(linkedlist.toString()).toBe('{ b } -> { a } -> { d } -> { c } -> NULL');
});

it(' Can successfully insert a node after the last node of the linked list', () => {
    const linkedlist  = new LinkedList();
    linkedlist.insert('c');
    linkedlist.insert('a');
    linkedlist.insert('b');
    linkedlist.insertAfter('c', 'd');
    expect(linkedlist.toString()).toBe('{ b } -> { a } -> { c } -> { d } -> NULL');
});


