'use strict';

const PseudoQueue = require('../queueWithStack/queue-with-stack.js')


const queue = new PseudoQueue();

it('“Happy Path” ', () => {
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    expect(queue.dequeue()).toBe(1);
});

it('Expected failure', () => {
    let emptyStack = new PseudoQueue();
    expect(emptyStack.dequeue()).toBe('Stack is empty')
});



