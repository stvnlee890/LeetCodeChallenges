/*
11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1
*/

// PSEUDOCODE
// Create two pointer, beginning and end
// multiply the lowest number with the distance between the two pointers.
// store these values into a variable, and check with each iteration if the new values are greated than the current.

/*
Time Complexity: O(n) 
    We're iterating through every element in the array. N is dependent on the size of the array. 
Space Complexity: O(1) 
    It uses constant amount of additional memory, and is not dependent on the input size of array. 
*/
var maxArea = function (height) {
  // Create start and end pointers
  let start = 0;
  let end = height.length - 1;
  // container is the max length of water based on both pointers
  let container = 0;
  // holds current value of length of water
  let currVal = 0;

  while (start < end) {
    if (height[start] < height[end]) {
    /* 
    we want to multiply the smallest height with the distance because that's the maximum 
    level the water can reach before overspilling
    */
      currVal = height[start] * (end - start);
      start++;
      // check if the current length is greater than max length (container)
      if (currVal > container) {
          container = currVal;
        }
    } else {
        // else if the end pointer has a greater value, mutliply that by the distance
        currVal = height[end] * (end - start);
        end--;
      if (currVal > container) {
        container = currVal;
      }
    }
  }
  return container
};

console.log(maxArea([1,1]));
