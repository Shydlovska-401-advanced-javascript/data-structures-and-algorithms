class AnimalShelter{
    constructor(){
    this.queue = [];
    }
    enqueue(animal){
      this.queue.push(animal);
  
    }
  
    dequeue(pref){
      if(!pref){
        let toRet = this.queue[0];
        this.queue.shift();
        return toRet;
      }else if(pref !== "dog" && pref !== "cat" || this.queue.length === 0){
       return null;
     }else{
       for(let i=0; i< this.queue.length; i++){
         if(pref === this.queue[i].type){
           let toRetern = this.queue[i];
            
           this.queue.splice(i,1);
           return toRetern;
         }
       }
       return `There is no ${pref} in our shelter`;
     }
    }
  
   
  }
  
  class Animal {
    constructor(name){
      this.name = name;
    }
  }
  
  class Dog extends Animal{
   constructor(name){
     super(name);
     this.type = "dog";
   }
  }
  
  class Cat extends Animal{
   constructor(name){
     super(name);
     this.type = "cat";
   }
  }
  
  let shelter = new AnimalShelter();
  let cat1 = new Cat("vasya");
  let cat2 = new Cat("petya");
  let cat3 = new Cat("klchuos")
  let cat4 = new Cat("kjdkdjchidshvc")
  let dog1 =new Dog("Hulk")
  let dog2 = new Dog("BigMac")
  
  shelter.enqueue(cat1)
  shelter.enqueue(cat2)
  shelter.enqueue(dog1)
  shelter.enqueue(cat3)
  shelter.enqueue(dog2)
  
  // console.log(shelter)
  
  shelter.dequeue("dog")
  
  // console.log(shelter)

  module.exports = {
   AnimalShelter: AnimalShelter,
   Cat: Cat,
   Dog: Dog
  }