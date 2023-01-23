/*
82. Remove Duplicates from Sorted List II

Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:
Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]

Example 2:
Input: head = [1,1,1,2,3]
Output: [2,3]
*/

// Initial approach
/*
Time Complexity: O(N)
    Even if we have a while nested loop, this isn't a quadratic algorithm. 
    The nested while loop still increments N times (if duplicates are found) so
    that we can point the placeholder dummy node to remove all duplicates.
Space Complexity: O(1)
*/
var deleteDuplicates = function (head) {
  if (!head) return head;
  // Create a dummy head node
  let dummy = new ListNode(0, head);
  // Create a placeholder for the dummy head
  let currDummy = dummy;
  let curr = head;
  let next = head.next;

  while (next) {
    // if the value of curr === value of next enter while loop
    if (next !== null && curr.val === next.val) {
      // while the curr val === next val keep looping
      while (next !== null && curr.val === next.val) {
        // increment the next pointer
        next = next.next;
        // while icrementing the next pointer, make sure to move the curr pointer behind it
        // so that we know when to exit loop
        curr.next = next;
      }
      // once loop exits, let the placeholder dummy node point to the next node
      // the placeholder dummy node will stay behind the curr node
      currDummy.next = next;
    } else {
      // if curr !== next make sure to increment the placeholder dummy so it runs behind curr
      currDummy = currDummy.next;
    }
    // if next === node return
    if (next === null) return dummy.next;
    // increment nodes
    curr = curr.next;
    next = next.next;
  }
  // we return dummy.next because if we simply returned dummy, we would also return the dummy value
  return dummy.next;
};

// Cleaner approach

// var deleteDuplicates = function (head) {
//   if (!head) return head;
//   let dummy = new ListNode(0, head);
//   let currDummy = dummy;
//   let curr = head;

//   while (curr !== null) {
//     if (curr.next !== null && curr.val === curr.next.val) {
//       while (curr.next !== null && curr.val === curr.next.val) {
//         curr = curr.next;
//       }
//       currDummy.next = curr.next;
//     } else {
//       currDummy = currDummy.next;
//     }
//     curr = curr.next;
//   }
//   return dummy.next;
// };
