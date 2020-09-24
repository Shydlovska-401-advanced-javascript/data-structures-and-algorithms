function treeIntersection(node1, node2){
  let output=[];
  let obj={};
  let arrTree1 = [];
  let arrTree2 = [];
  
 
  arrTree1.push(node1)
  let i = 0;
  while(i < arrTree1.length){
    const temp = arrTree1[i];
    if(temp.left){
      arrTree1.push(temp.left)
    }
    if(temp.right){
      arrTree1.push(temp.right)
    }
    i++
  }
  arrTree1 = arrTree1.map(node => node.val);



for(let k =0; k<arrTree1.length; k++ ){
  if(!obj[arrTree1[k]]){
    obj[arrTree1[k]]=1
  }else{
    obj[arrTree1[k]]+=1
  }
}


arrTree2.push(node2)
  let j = 0;
  while(j < arrTree2.length){
    const temp = arrTree2[j];
    if(temp.left){
      arrTree2.push(temp.left)
    }
    if(temp.right){
      arrTree2.push(temp.right)
    }
    j++
  }
  arrTree2=arrTree2.map(node=> node.val);


   for(let l =0; l< arrTree2.length; l++ ){
  if(obj[arrTree2[l]]){

    output.push(arrTree2[l])
  }
  }
   return output;
}




// console.log(treeIntersection(node3, node6));

module.exports =treeIntersection;