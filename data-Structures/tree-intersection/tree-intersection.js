function treeIntersection(tree1, tree2){
    let output=[];
    let obj={};
    let arrTree1 = [];
    let sum1 =0;
    let arrTree2 = [];
    let sum2 =0;

   
    arrTree1.push(tree1.root)
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
    let arrVal =arrTree1.map(node=> node.val);
  

  for(let k =0; k<arrVal.length; k++ ){
    if(!obj[arrVal[k]]){
      obj[arrVal[k]]=1
    }else{
      obj[arrVal[k]]+=1
    }
  }
  
  arrTree2.push(tree2.root)
    let j = 0;
    while(j < arrTree2.length){
      const temp = arrTree2[j];
      if(temp.left){
        arrTree1.push(temp.left)
      }
      if(temp.right){
        arrTree1.push(temp.right)
      }
      j++
    }
    let tree2Val = arrTree2.map(node=> node.val);

     for(let l =0; l<tree2Val .length; l++ ){
    if(!obj[tree2Val [l]]){
      ouptup.push(tree2Val [l])
    }
    }
     return output;
  }
 
