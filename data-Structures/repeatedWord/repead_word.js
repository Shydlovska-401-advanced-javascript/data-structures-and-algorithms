function repeatedWord(str){
    let obj = {};
    if(str === ''){
        return 'Empty'
      }
  
  let newStr = str.toLowerCase().replace(/,/g, '').split(" ");
  if(newStr.length === 1){
    return 'no any repeated words'
  }
    for(let i=0; i< newStr.length; i++){
     if(!obj[newStr[i]]){
       obj[newStr[i]] = 1;
     }else{
      return newStr[i]
     }
    }
  
  
  }

module.exports = repeatedWord;