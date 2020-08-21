'use strict';

const DataStructure = require('../../data-Structures/stack-queue/stack_queue.js')

const stack = new DataStructure.Stack();
const queue = new DataStructure.Queue();

describe(' Describe Stack', () => {

it('Should instance an empty stack', () => {
     expect(stack).toBeDefined();
});

it('Can succesfully push onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size).toBe(3)
});

it('Can succesfully push  multiple val onto a stack', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1)
});

it('Can succesfully pop  multiple val onto a stack', () => {
     stack.push(1);
     stack.push(2);
     stack.push(3);
     stack.pop()
     expect(stack.peek()).toBe(2)
 });

 it('Should send expression if stack is empty', () => {
    const emptyStack  = new DataStructure.Stack();
    expect(emptyStack.pop()).toBe('Stack is empty')
 });

 it('Should send expression if stack is empty', () => {
    const emptyStack  = new DataStructure.Stack();
    expect(emptyStack.peek()).toBe('Stack is empty')
 });

 it('Can succesfully check is Empty stack or not stack', () => {
    stack.push(1)
     expect(stack.isEmpty()).toBe(false)
 });

});



describe('describe Queue', () => {


 it('Should instance an empty queue', () => {
    // const queue  = new Queue();
     expect(queue).toBeDefined();
});

it('Can succesfully add multiple onto a queue', () => {
    // const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size).toBe(3)
});

it('Can succesfully add  val onto a queue', () => {
//    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.peek()).toBe(1)
});

it('Can succesfully take off val from  queue', () => {
    // const queue = new Queue();
     queue.enqueue(1);
     queue.enqueue(2);
     queue.enqueue(3);
     queue.dequeue()
     expect(queue.peek()).toBe(2)
 });

 it('Should send expression if queue is empty', () => {
    const emptyQueue = new DataStructure.Queue();
    expect(emptyQueue.dequeue()).toBe('Empty queue')
 });


 it('Should send expression if queue is empty', () => {
    const emptyQueue = new DataStructure.Queue();
    expect(emptyQueue.peek()).toBe('Empty queue')
 });


 it('Can succesfully check is Empty queue or not', () => {
    queue.enqueue(1)
     expect(queue.isEmpty()).toBe(false)
 });



});

