/*
203. Remove Linked List Elements

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Example 1:
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Example 2:
Input: head = [], val = 1
Output: []

Example 3:
Input: head = [7,7,7,7], val = 7
Output: []

*/

/*
Time Complexity: O(N) we're only iterating through the list once
Space Complexity: O(N) we're creating a new node for every value that isn't equal to val
*/

var removeElements = function (head, val) {
  if (!head) return head;
  // create a dummy node so that we have the next pointing to the values that !== val
  let dummy = new ListNode(0);
  // create reference to dummy so we can return curr.next
  let curr = dummy;

  while (head !== null) {
    if (head.val !== val) {
      // create a new node of the head.val if it doesn't equal to val
      dummy.next = new ListNode(head.val);
      // increment dummy node here so that it increments properly
      // if placed outside the if statement, we can't assign a next value for a null node
      dummy = dummy.next;
    }
    // increment the head
    head = head.next;
  }
  return curr.next;
};
