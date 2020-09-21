class Hashtable {

    constructor(size=1024) {
      this.buckets = new Array(size);
    }
  
    add(key, value) {
  
      const index = this.hash(key);
  
      const contentsOfBucket = this.buckets[index];
  
      if(contentsOfBucket === undefined) {
        this.buckets[index] = [ [key, value] ];
      } else {
        // what to do now???
        let inserted = false;
        for(let i=0; i< contentsOfBucket.length; i++){
          if(contentsOfBucket[i][0] === key){
            contentsOfBucket[i][1] === value;
            inserted =true;
          }
        }
        if(inserted === false){
          contentsOfBucket.push([key, value])
        }
      }
    }
  
    get(key) {
  
      const index = this.hash(key);
  
      const itemsInBucket = this.buckets[index];
  
      if(itemsInBucket) {
        // should have array of key,value pairs
        // [ ['cas',43], ['jb',32] ]
        for(let item of itemsInBucket) {
          if(item[0] === key) {
            return item[1];
          }
        }
      }
  
      return null; 
    }
  
    contains(key) {
      const index = this.hash(key);
  
      if(this.buckets[index] === undefined) {
        return false;
      }
  
      return true;
    }
  
    hash(key) {
  
    let sum = 0;
  
    for(let char of key) {
      sum += char.charCodeAt(0);
    }
  
    const primed = sum * 599;
  
    const index = primed % this.buckets.length;
  
    return index;
  
    }
  
  }

  module.exports = Hashtable;
  
//   let hashT= new Hashtable();
  
//   hashT.add('kate', '3')
//   hashT.add('hulk', '4')
//   hashT.add('mac', '2')
//   hashT.get('hulk')
//   hashT.contains('hulk')
//   // console.log(hashT)