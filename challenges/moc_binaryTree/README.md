/*
Domain problem:
Write a function which takes Binary Tree, and return sum of odd numbers in the tree.

Input: Binary Tree
Ouput: sum of oadd numbers

Edge cases ---> empty tree  return 0

Algorithm:

create a function somOfOddnums
create empty arr
create var sum
push root to arr
create i = 0;
while loop
create var temp = arr[i]
if left push left node
if right push right node
i++

newArr push all node vals from arr to new arr
 create for loop to iterate through newArr and check does I have odd numbers
 if yes, add them to sum
 return sum

 Pseudo code:

 function somOfOddnums(tree){
   let arr = [];
   let sum = 0;
   arr.push(tree.roo)
   let i =0;
   while(i< arr.length)
   let temp = arr[i]
   if(temp.left)
   arr.push(temp.left)
   if(temp.right)
   arr.push(temp.right)

   i++

   let newArr = arr.map(node => node.val);

   for(let j =0; j< newArr.length; j++ ){
     if(newArr[j] %2 ! == 0)
     sum +=newArr[j]

     return sum;
   }
 }


 Big O(N)

 Visual:

                 arr =  [node 1, node 2,  node 3]
                 newArr[1,2,3]
                 sum = 1+3 = 4
                 return 4
          i=0
            1
          /   \
 i=1   2        3 i=3

*/