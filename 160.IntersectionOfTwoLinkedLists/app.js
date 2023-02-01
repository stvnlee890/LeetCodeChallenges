/*
160. Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect.
If the two linked lists have no intersection at all, return null.
For example, the following two linked lists begin to intersect at node c1:

The test cases are generated such that there are no cycles anywhere in the entire linked structure.
Note that the linked lists must retain their original structure after the function returns.

Custom Judge:

The inputs to the judge are given as follows (your program is not given these inputs):

intersectVal - The value of the node where the intersection occurs. This is 0 if there is no intersected node.
listA - The first linked list.
listB - The second linked list.
skipA - The number of nodes to skip ahead in listA (starting from the head) to get to the intersected node.
skipB - The number of nodes to skip ahead in listB (starting from the head) to get to the intersected node.
The judge will then create the linked structure based on these inputs and pass the two heads, headA and headB to 
your program. If you correctly return the intersected node, then your solution will be accepted.

Example 1:

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before 
the intersected node in A; There are 3 nodes before the intersected node in B.
- Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node in B) 
are different node references. In other words, they point to two different 
locations in memory, while the nodes with value 8 in A and B (3rd node in A and 4th node in B) point to the same location in memory.

Example 2:

Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; 
There are 1 node before the intersected node in B.

Example 3:

Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. 
Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

*/

/*
Time Complexity: O(n + m) where n and m are the lengths of the linked lists `headA` and `headB` respectively.
Space Complexity: O(1) we only use constant amout of extra memory to store variables which is irrelevant to the size of input
*/
var getIntersectionNode = function (headA, headB) {
  /*
  create two count variables to keep track of the length of each list
  */
  let count = 1;
  let currCount = 1;

  let l1 = headA;
  let l2 = headB;
  // Create two loops that count the list's length
  while (headA.next !== null) {
    headA = headA.next;
    count++;
  }
  while (headB.next !== null) {
    headB = headB.next;
    currCount++;
  }
  
  /*
  if count of headB is greater we want to get the difference of both counts and provide 
  those to the helper function that will iterate the difference of headB
  ex. if newCount = 2 that's how much we need to increment to synchronize the lists and point the head
  to the proper increment.
  same goes for headA
  */
  if (currCount > count) {
    let newCount = currCount - count;
    l2 = synchronize(l2, newCount);
  } else {
    let newCount = count - currCount;
    l1 = synchronize(l1, newCount);
  }

  /*
  after we've synchronized the lists, enter final loop which checks if there's an intersection.
  We don't check for "l1.val" because if we check for the vals, we're checking for the primitive data types / values and not their location in memory, 
  and there are some cases where headA and headB hold the same values.

  How we know that these two lists intersect is by checking if the next pointer points to the same location in memory.
  Check example below after the code
  */
  while (l1 !== null && l2 !== null) {
    // we check for the same reference in memory. If true return either l1 or l2 (doesn't matter in this case)
    if (l1 === l2) return l1;
    // increment both lists
    else {
      l1 = l1.next;
      l2 = l2.next;
    }
  }
  // return null if no intersection found
  return null;
};

// Helper function to help synchronize the list's length of the longest list
function synchronize(list, count) {
  for (let i = 0; i < count; i++) {
    list = list.next;
  }
  return list;
}

/*
EXPLANATION

  For example:

  const obj1 = { house: "house" }
  const obj2 = { house: "house" }
  console.log(obj1 === obj2) ==> false
  These two do not point to the same location in memory.

  const obj3 = obj1
  const obj4 = obj1
  console.log(obj3 === obj4) ==> true
  These point to the same location in memory
  They are both references to the same object

  What happens when we check for headA.val
  console.log(obj1.house === obj2.house) ==> true
  The properties hold the same data type and value so it's true.
  Which is why we do headA.val === headB.val 
*/