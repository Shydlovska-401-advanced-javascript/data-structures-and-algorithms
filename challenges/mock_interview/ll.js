// moc
// Feature Tasks
// Ask the candidate to write a function to validate whether or not a Linked list is palindrome
// Help the candidate understand the definition of a Palindrome if he/she is unsure of it.
// A palindrome is a word, phrase, number, or sequence of nodes which reads the same backward as forward.
// Avoid utilizing any of the built-in methods available in your language.
// This problem can be solved using different approaches:
// Using a helper data structure (Array or Linked List) to keep track of the nodes.
// This method takes O(n) and uses O(n) extra space.
// Reversing the Linked List, and checking for equality of the reversed part.
// Structure
// Familiarize yourself with the grading rubric, so you know how to score the interview.

// Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

// Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

// Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

// Add up all the points at the end, and record the total at the bottom of the page.

// Example
// Input	Output
// head->[t]->[a]->[c]->[o]->[c]->[a]->[t]	TRUE
// head->[m]->[o]->[o]->[m]	TRUE
// head->[h]->[o]->[u]->[s]->[e]	FALSE
  
  function isPalindrome(list){
    let str = '';
    let current = list.head;
    while(current){
      str+= current.val;
      current = current.next;
    }
    // console.log(str)
    if(str.lenght === 0){
      return true;
    }
    let i =0;
    let j =str.length-1;
    while( i < j){
     if(str[i] !== str[j]){
       return false;
     }else{
      i++;
      j--
     }
     return true;
    }
  }
  
  // isPalindrome(list);
  

  // Feature Tasks
// Ask the candidate to write a function to reverse a Singly Linked List.
// Avoid utilizing any of the built-in methods available in your language.
// Attempt to guide the candidate to an in-place solution (i.e. avoid creating a copy of the Linked List).
// This problem can be approached in several ways:
// Iterating over the linked list and storing a reference to a current node, its previous node, and its next node.
// In every iteration, after the next node is stored, the current’s node next pointer is pointed at the stored reference to the previous node.
// This solution takes O(n) time and uses O(1) extra space.
// A recursive solution that reverses the body of the link list before re-connecting the head.
// This solution takes O(n) time and uses O(n) space on the call stack.
// Creating a copy of the linked list, inserting elements at the head of the new list.
// This solution takes O(n) time and uses O(n) space.
// Structure
// Familiarize yourself with the grading rubric, so you know how to score the interview.

// Look for effective problem solving, efficient use of time, and effective communication with the whiteboard space available.

// Every solution might look a little different, but the candidate should be able to test their solution with different inputs to verify correctness.

// Assign points for each item on the Rubric, according to how well the candidate executed on that skill.

// Add up all the points at the end, and record the total at the bottom of the page.

// Example
// Input	Output
// head->[3]->[2]->[1]	head->[1]->[2]->[3]
// head->['a']->['b']->['c']	head->['c']->['b']->['a']


function reverseLL(list){
  if(list.head === null){
    return 'Empty list';
  }

  let prev = null;
  let current = list.head;
  let next = list.head.next;

  while(current.next){
    current.next = prev;
    prev = current;
    current = next;
    next = next.next;
  }
  current.next = prev;
  list.head = current;
}

// reverseLL(list2);

// list2.toString();
