/*Domain problem 
Create a function wich takes the string. Check if the string is full of the qunick letters.Return boolean


Input: "I love cats"
Output: true

Input: "Donald duck"
Output: false

Edge cases: ''
return null


Visual:

I love cats


{
  i:1
  l:1
  o:1
  v:1
  e:1
  c:1
  t:1
  s:1
}

return true;

Algoruthm:

function uniouLetter(str){

  create {}
  str to lover case, remove all punctuation, splite by letters

  loop through array of letters and add them to the object
  if object has already the key, return false, othervise , return true;

}

Big O
time: O(n)
space: O (n)


Pseudo code:

function uniouLetter(str){

  let obj = {};

  let arrLetters = str.toLowerCase().replace(/,.!?/g ' ').split('')

  for(let i=0; i< arrLetters.length; i++ ){
    if(obj[arrLetters[i]]){
      return false;
    }else{
      obj[arrLetters[i]] = 1;
    }
  }
  return true;
}


*/