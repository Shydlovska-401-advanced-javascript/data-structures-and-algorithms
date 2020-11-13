'use strict';

var levelOrderBottom = function(root) {
    if(root === null || root.val === null) {
        return [];
    }
    let output = [];
    let brf = [root];
    output.push([root.val])
    
    while (brf.length > 0) {
        let i =0;
        let arrVal =[]
        while(i < brf.length){
            if(brf[i]. left){
                console.log("left")
                arrVal.push(brf[i].left)
            }
            if(brf[i].right){
                arrVal.push(brf[i].right)
            }
            i++
            // console.log(arrVal);
        }
        if(arrVal.length > 0) {
            output.push(arrVal.map(n => n.val));
        }
        brf = arrVal
    }
    return output.reverse();    
};
