# Challenge Summary
enqueue and dequeue cats and dogs from queue

## Challenge Description
Create a class called AnimalShelter which holds only dogs and cats. The shelter operates using a first-in, first-out approach.

enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.
dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.

If a cat or dog isn’t preferred, return whichever animal has been waiting in the shelter the longest.

## Approach & Efficiency
Big (O)
for enqueue
time: O(1)
space: O(N)
dequeue
time: O(N)
space: O(N)

## Solution
![pseudocode](animalShelter.jpg)