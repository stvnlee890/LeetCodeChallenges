/* 
876. Middle of the Linked List

Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.

Example 1:
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Example 2:
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

*/
/*
Time Complexity: O(N) we traverse through entire list in the beginning then we traverse to find the middle
Space Complexity: O(1) because we use few extra variables to store intermediate values, and the size of the 
variables do not depend on the input of the linked list.
*/
var middleNode = function (head) {
  // initialize count. 
  let count = 0;
  // reference to list
  let curr = head;

  // iterate through list and count the length of the list
  while (curr) {
    curr = curr.next;
    count++;
  }
  // if we only have a single node, return the head because then there's no middle
  if (count === 1) return head;
  // pass head and count to helper function
  return returnMiddle(head, count);
};

function returnMiddle(head, count) {
  // initialize a current count for the second iteration of list
  let currCount = 1;
  // if the list is even enter this if statement
  if (count % 2 === 0) {
    // point count to new count / 2
    count = count / 2;
    // traverse list
    while (head) {
      head = head.next;
      // increment currCount
      currCount++;
      // we operate with count + 1 because if the list is even, we want to return the second middle node
      if (currCount >= count + 1) {
        return head;
      }
    }
  } else {
    count = count / 2;
    while (head) {
      head = head.next;
      currCount++;
      // we operate with Math.ceil() here because if we have a decimal, we want to return the middle node.
      if (currCount >= Math.ceil(count)) {
        return head;
      }
    }
  }
}
