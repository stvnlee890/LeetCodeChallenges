/**
21. Merge Two Sorted Lists

You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

 */

var mergeTwoSortedLists = function (list1, list2) {
  // instantiate new list where the resulting merged lists will be
  let resultList = new ListNode();
  // Create a pointer to the head of the list, which we will return as head.next
  let head = list;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      // point the new lists next to the value that's lower between list1 and list2
      resultList.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      // if list2 or list1 === list2 run this code
      resultList.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    // increment the resut list as we go so we can point the proper node to the new value of list1 or list2
    resultList = resultList.next;
  }
  // list1 or list2 can be uneven so these conditionals handle those edge cases
  if (list1 !== null) {
    resultList.next = list1;
  }
  if (list2 !== null) {
    resultList.next = list2;
  }
  return head.next;
};

/*
list1
1 -> 2 -> 4

list2
1 -> 3 -> 4 -> 5

resultList
0

--------------------
first iteration
if(1 < 1){
    else {
        resultList = 0 -> 1
        increment list2
    }
}
increment resultList

--------------------
second iteration
if(1 < 3) {
    resultList = 0 -> 1 -> 1
    increment list1
}
increment resultList

--------------------
third iteration
if(2 < 3) {
    resultList = 0 -> 1 -> 1 -> 2
    increment list1
}
increment resultList

--------------------
fourth iteration
if(4 < 3) {
    else {
        resultList = 0 -> 1 -> 1 -> 2 -> 3
        increment list2
    }
}
increment resultList

--------------------
fifth iteration
if(4 < 4) {
    else {
        resultList = 0 -> 1 -> 1 -> 2 -> 3 -> 4
        increment list2
    }
}
increment resultList

--------------------
sixth iteration
if(4 < 5) {
    resultList = 0 -> 1 -> 1 -> 2 -> 3 -> 4 -> 4
    increment list1 
}
increment resultList

--------------------

EXIT WHILE LOOP since list1 = null and we need both list1 && list1 !== null

We then hit the conditional statements
*/
