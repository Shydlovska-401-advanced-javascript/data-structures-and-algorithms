class Node{
    constructor(val, left=null, right=null){
this.val = val;
this.left = left;
this.right=right;
    }
}



class BinarySearch{
    constructor(){
        this.root = null;
    }

    add(val){
    if(!this.root){
        this.root = new Node(val);
    }else{
    this._insert(this.root, val);
    }
       
    }

  _insert(node, val){
    if(val > node.val){
        if(node.right === null ){
        node.right = new Node(val);
        }else{
            this._insert(node.right, val)
        }
    } else {
        if(node.left  === null) {
        node.left = new Node(val);
        }else{
            this._insert(node.left, val)
        }
    }
       }

      


    contains(val){
      if(!this.root){
            return;
        }
        let cur = this.root; 
        while(cur){
            if(cur.val === val){
                return true;  
        }
        if(val> cur.val){
            cur = cur.right;
        }
        if(val< cur.val){
            cur = cur.left;
        }  
    } 
        return false;
    }
}


class BinaryTree extends BinarySearch {
    constructor(){
      super()
        this.root = null;
    }

    preOrder(){
    let arr = [];

        function _preOrder(root){
         if(!root){
        return;
        }
        arr.push(root.val);
        _preOrder(root.left);
        _preOrder(root.right);    
    }

    _preOrder(this.root);
    return arr;
    }

    inOrder(){
    let arr = [];

        function _inOrder(root){
        if(!root){
        return;
       }
    _inOrder(root.left);
    arr.push(root.val);
    _inOrder(root.right);   
     }
    _inOrder(this.root);
    return arr;
 }

    postOrder(){
    let arr = [];

        function _postOrder(root){
        if(!root){
        return;
    }
    _postOrder(root.left);
    _postOrder(root.right);
    arr.push(root.val);

    }
    _postOrder(this.root);
      return arr;
    }
}

let tree = new BinaryTree();
tree.add(10)
tree.add(11)
tree.add(1)
tree.add(100)
tree.add(4)
// console.log(tree)
tree.preOrder();
// tree.inOrder();
tree.postOrder();
// tree.contains(-1)

module.exports =  BinaryTree;