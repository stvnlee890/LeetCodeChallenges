/*

1290. Convert Binary Number in a Linked List to Integer

Given head which is a reference node to a singly-linked list. 
The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.
The most significant bit is at the head of the linked list.

Example 1:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10

Example 2:
Input: head = [0]
Output: 0

*/

/*
Time Complexity: O(N)
    N is the number of nodes in the lined list and iterates through entire list to 
    appen the value of each node to string
Space Complexity: O(N)
    N is the number of bits in binary representation. It creates a new string for each representation.
*/

var getDecimalValue = function(head) {
    let str = ""
    while(head) {
        str += head.val
        head = head.next
    }
    return parseInt(str, 2)
}