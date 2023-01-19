/*
4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n))

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

*/

/*
Time Complexity: O(n log n) where n is the total number of elements in the two input arrays from sort function.
Space Complexity: O(n) we create a copy of the two input arrays using concat method.
*/
var findMedianSortedArrays = function (nums1, nums2) {
  const merged = nums1.concat(nums2);
  const sort = merged.sort((a, b) => a - b);
  const median = sort.length / 2;

  let idx1;
  let idx2;
  if (median % 2 === 0 || median % 1 === 0) {
    idx1 = Math.floor(median);
    idx2 = idx1 - 1;
    return (sort[idx1] + sort[idx2]) / 2;
  } else {
    idx1 = Math.floor(median);
    return sort[idx1];
  }
};

console.log(findMedianSortedArrays([], [2, 3]));

// Solve this problem implementing your own merge sort function