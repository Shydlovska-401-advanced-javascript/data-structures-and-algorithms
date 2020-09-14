function insertionSort(arr) {
  let val;  
  let i;
  let j;    
  if(arr.length === 0){
    return null
  }                     
 for (i = 0; i < arr.length; i++) {
   if(typeof arr[i] !== 'number'){
     return false;
   }

   val = arr[i];

   for (j = i - 1; j > -1 && arr[j] > val; j--) {
     arr[j + 1] = arr[j];
   }
   arr[j + 1] = val;
 }
 return arr;
}

module.exports = insertionSort;