'use strict';

function leftJoin(obj1,obj2){

let i=0;
let key = Object.keys(obj1);
while(i < key.length){ 
    if(obj2[key[i]]){
    obj1[key[i]] = [obj1[key[i]], obj2[key[i]]]
    } else {
    obj1[key[i]] = [obj1[key[i]], null]
    }
    i++
}
return obj1;
    }


module.exports = leftJoin;