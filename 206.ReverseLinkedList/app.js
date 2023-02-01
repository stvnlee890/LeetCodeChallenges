/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
*/

/*
Time Complexity: O(N) Travese link once
Space Complexity: O(1) We have constant memory space as we only initialize variables regardless of input size
*/
var reverseList = function (head) {
  // create a reference to prev node which null in the beginning
  let prev = null;
  // create a reference to head node
  let curr = head;

  // while curr !== null
  while (curr) {
    // need a reference to next node since we're severing the link to the next node
    let next = curr.next;
    // change the actual node's next pointer to prev which is null in the beginning
    curr.next = prev;
    // move the prev node (which was null) to the current node, so that the next iteration we can point to prev (current node)
    prev = curr;
    // move the current node to next
    curr = next;
  }
  // return prev since previous will now be pointing to the head
  return prev;
};

/*
VISUAL EXPLANATION

         1  ->  2  ->  3  ->  4  ->  5  ->  null
prev   curr    next

First Iteration
         1  ->  2  ->  3  ->  4  ->  5  ->  null
prev   curr    next

curr.next = prev (null)
null <- 1 -> 2 -> 3 -> 4 -> 5 -> null

prev = curr
curr = next
null <- prev -> curr -> 3 -> 4 -> 5 -> null

Second Iteration
let next = curr.next
null <- prev -> curr -> next -> 4 -> 5 -> null
curr.next = prev
null <- prev <- curr -> next -> 4 -> 5 -> null
prev = curr
null <- 1 <- prev -> next -> 4 -> 5 -> null
curr = next
null <- 1 <- prev -> curr -> 4 -> 5 -> null

Third Iteration
let next = curr.next
null <- 1 <- prev -> curr -> next -> 5 -> null
curr.next = prev
null <- 1 <- prev <- curr -> next -> 5 -> null
prev = curr
null <- 1 <- 2 <- prev -> next -> 5 -> null
curr = next
null <- 1 <- 2 <- prev -> curr -> 5 -> null


Fourth Iteration
let next = curr.next
null <- 1 <- 2 <- prev -> curr -> next -> null
curr.next = prev
null <- 1 <- 2 <- prev <- curr -> next -> null
prev = curr
null <- 1 <- 2 <- 3 <- prev -> next -> null
curr = next
null <- 1 <- 2 <- 3 <- prev -> curr-> null

Fifth Iteration
let next = curr.next
null <- 1 <- 2 <- 3 <- prev -> curr -> next
curr.next = prev
null <- 1 <- 2 <- 3 <- prev <- curr -> next
prev = curr
null <- 1 <- 2 <- 3 <- 4 <- prev -> next
curr = next
null <- 1 <- 2 <- 3 <- 4 <- prev -> curr

Curr is now at null so we exit while loop
null <- 1 <- 2 <- 3 <- 4 <- 5 -> null
return prev since it's at head
*/
