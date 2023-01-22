/* 
83. Remove Duplicates from Sorted List 

Given the head of a sorted linked list, delete all duplicate such that each element appears
only once. Return the linked list sorted as well.


Time Complexity: O(N), we're traversing through entire linked list once.
Space Complexity: O(1) 
*/

var deleteDuplicates = function (head) {
  if (!head) return head;
  let curr = head;
  let next = curr.next;

  while (next) {
    if (curr.val === next.val) {
      // if val of curr === val of next, we remove link by point the curr head's next, to the
      // next value of next
      curr.next = next.next;
      // we then point the next as the head's next.
      next = curr.next;
    } else {
        // If no val of head === val of next, we traverse the list by changing pointers of curr to 
        // next, and next to next.next
      curr = next;
      next = next.next;
    }
  }
  // return the final list with removed duplicates
  return head;
};
