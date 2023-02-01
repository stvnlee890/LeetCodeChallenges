/*
234. Palindrome Linked List

Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example 1:
Input: head = [1,2,2,1]
Output: true 

Example 2:
Input: head = [1,2]
Output: false

*/

/*
Time Complexity: O(N)
    We do two iterations, the first to push the values into array
    The second, to iterate over the array.
Space Complexity: O(N)
    We create linear space as we push all the elements of the traversed list 
    into the array.
*/
var isPalindrome = function (head) {
  // create reference to head
  let curr = head;
  // initialize array with the first value of the list
  let arr = [curr.val];
  // loop through referenced list
  while (curr.next) {
    curr = curr.next;
    // push the values into array
    arr.push(curr.val);
  }

  // iterate the array backwards to check if the elements are palindrome to linked list
  for (let i = arr.length - 1; i >= 0; i--) {
    // if they're not immediately return false
    if (arr[i] !== head.val) return false;
    head = head.next;
  }
  // return true if we exit loop, meaning that all values were equal
  return true;
};
