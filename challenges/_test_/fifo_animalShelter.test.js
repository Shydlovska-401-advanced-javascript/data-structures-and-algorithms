'use strict';

const AnimalShelter = require('../fifoAnimalShelter/animalShelter.js')


const shelter = new AnimalShelter.AnimalShelter();



let cat1 = new  AnimalShelter.Cat("vasya");
let cat2 = new  AnimalShelter.Cat("petya");
let cat3 = new  AnimalShelter.Cat("klchuos")
let cat4 = new  AnimalShelter.Cat("kjdkdjchidshvc")
let dog1 = new  AnimalShelter.Dog("Hulk")
let dog2 = new  AnimalShelter.Dog("BigMac")



it('“Happy Path” ', () => {
    shelter.enqueue(cat1)
    shelter.enqueue(cat2)
    shelter.enqueue(dog1)
    shelter.enqueue(cat3)
    shelter.enqueue(dog2)
    expect(shelter.dequeue("cat")).toBe(cat1);
});

it('Expected failure', () => {
    let emptyshelter= new AnimalShelter.AnimalShelter();
    emptyshelter.enqueue(cat1)

    expect(emptyshelter.dequeue("dog")).toBe('There is no dog in our shelter')
});

it('Edge case', () => {
    let emptyshelter= new AnimalShelter.AnimalShelter();
    emptyshelter.enqueue(cat1);
    emptyshelter.enqueue(dog2)
    expect(emptyshelter.dequeue()).toBe(cat1)
});