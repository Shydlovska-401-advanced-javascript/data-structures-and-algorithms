/*

input unsorted array :
[8,4,23,16,15]

output sorted arra:
[4,8,15,16,23]


Algorithm:

mergeSort function which takes arr
check if the length of arr > 1
find middle point
firstHalf = mergeSort(arr.splice(0, middle point))
secondHalf =  mergeSort(arr.splice(-middle point))
return merge(firstHalf, secondHalf)


merge(arr1, arr2 )
sortedArr = [];
i = 0;
j=0;
while( i< arr1.lenght && j< arr2.length){
  if arr1[i] < arr2[j]
 sortedArr. push(arr1[i]);
  i++
  else 
 sortedArr. pusharr2[j]
  j++
}

while( i< arr1.length)
sortedArr.push(arr1[i])


while( j < arr2.length)
sortedArr. push(arr2[j])

return sortedArr

Big O 
time: O (n^2)
space; O (n)


Visual:


mergeSort

[8,    4,    23,    16,   15]

[8,   4,  23  ]     [16    15]

[8   4]   [23]      [16]   [15]

[8]   [4]


merge

[4  , 8]           [15, 16]
[4, 8, 23]

return [4,8,15,16,23]

*/