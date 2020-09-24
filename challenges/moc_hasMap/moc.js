function uniouLetter(str){

    let obj = {};
  
    let arrLetters = str.toLowerCase().replace(/,.!?/g, '').replace(' ', '').split('')
  // console.log(arrLetters)
    for(let i=0; i< arrLetters.length; i++ ){
  // console.log(arrLetters.length)
  
      if(obj[arrLetters[i]]){
        return false;
      }else{
        obj[arrLetters[i]] = 1;
        console.log(obj)
      }
       
     
    }
     return true;
    
  }
  
  
  console.log(uniouLetter('Donald duck'))