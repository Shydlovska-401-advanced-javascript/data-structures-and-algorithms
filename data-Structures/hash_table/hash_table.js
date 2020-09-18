class HashTable {
    constructor(size) {
      this.size = size;
      this.buckets = new Array(size);
    }
    hash(key) {
      if (typeof (key) === 'string') {
        return key.length % this.size;
      } else {
        return key % this.size;
      }
    }
  
    add(key, value) {
      let bucketNum = this.hash(key);
      let obj = this.buckets[bucketNum];
      if (obj) {
        obj[key] = value;
      } else {
        let newObj = {};
        newObj[key] = value;
        this.buckets[bucketNum] = newObj;
      }
    }
  
    get(key) {
      let num = this.hash(key);
      if (this.buckets[num]) {
        if (this.buckets[num][key]) {
          return this.buckets[num][key];
        }
      }
      return null
    }
  
    contains(key) {
        let num = this.hash(key);
        if (this.buckets[num]) {
          if (this.buckets[num][key]) {
            return true;
          }
        }
        return false;
      }
  
  }
  
  let table = new HashTable(15);
  
  table.put(25, 'kate');
  table.put(29, 'andrii')
  table.put(5, 'hulk')
  
  console.log(table.get(25));
  console.log(table.get('kjhj'));