function repeatedWord(str){
    let obj = {};
    if(str === ''){
        return 'Empty'
      }
  
  let newStr = str.replace(/,/g, '').split(" ");
  if(newStr.length === 1){
    return 'no any repeated words'
  }
  console.log(newStr)
    for(let i=0; i< newStr.length; i++){
     if(!obj[newStr[i]]){
       obj[newStr[i]] = 1;
     }else{
        console.log(obj)
      return newStr[i]
     }
    }
  
  
  }

module.exports = repeatedWord;