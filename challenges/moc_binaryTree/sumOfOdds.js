    
    // interview 1
    function sumOdOdds(tree){
     let arr = [];
     let sum =0;
     arr.push(tree.root)
     let i = 0;
     while(i < arr.length){
       const temp = arr[i];
       if(temp.left){
         arr.push(temp.left)
       }
       if(temp.right){
         arr.push(temp.right)
       }
       i++
     }
    let newAr = arr.map(node=> node.val);
     console.log(newAr)
     for(let j =0; j< newAr.length; j++){
       if(newAr[j] %2 !==0){
        sum += newAr[j];
       }
       
     }
     return sum;
   }



//    interview 2

   function countFolders(tree1, tree2){
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
       if(!temp.left && !temp.right){
         sum1+=1
       }
       i++
     }
   
     arrTree2.push(tree2.root)
     let j = 0;
     while(j < arrTree2.length){
       const temp = arrTree2[j];
       if(temp.left){
         arrTree2.push(temp.left)
       }
       if(temp.right){
         arrTree2.push(temp.right)
       }
       if(!temp.left && !temp.right){
         sum2+=1
       }
       j++
     }
       console.log(sum1, sum2)
     if(sum1 === sum2){
       return true;
   }
  }