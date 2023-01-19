/*
66. Plus One

You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit
of the integer. The digits are ordered from most significant in left-to-right order. The large integer does not contain any leading
0's

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
*/

// Time Complexity: O(N) worst case is that if we have a 9 at the beginning of array we would have to shift the index of each element but also, we're iterating through entire array in worst case
// Space Complexity: O(1) because we're modifying the input array in place and not creating extra memory
var plusOne = function (digits) {
  if (digits[digits.length - 1] !== 9) {
    digits.splice(digits.length - 1, 1, digits[digits.length - 1] + 1);
    return digits;
  } else {
    let prev;
    for (let i = digits.length - 1; i >= 0; i--) {
      if(digits[i] === 9 && digits[i - 1] === undefined) {
        prev = i;
        digits.splice(i, 1, 0);
        digits.unshift(1)
      } else if(digits[i] === 9) {
        prev = i;
        digits.splice(i, 1, 0);
      }
      else if (prev) {
        prev = null;
        digits.splice(i, 1, digits[i] + 1);
        return digits;
      }
    }
  }
  return digits;
};

console.log(plusOne([8,9,9,9]));
