/*

15. 3Sum

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation: 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.

Example 2:

Input: nums = [0,1,1]
Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]
Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.
 */

var threeSum = function (nums) {
  const sorted = nums.sort((a, b) => a - b);
  let result = [];
  console.log(sorted);
  for (let i = 0; i < sorted.length; i++) {
    let scout = i + 1;
    let end = nums.length - 1;
    if (sorted[i] > 0) break;
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    if (sorted[i] === 0 && sorted[scout] === 0 && sorted[end] === 0) {
      result.push([sorted[i], sorted[scout], sorted[end]]);
      return result;
    }
    while (scout < end) {
      console.log(sorted[i], sorted[scout], sorted[end]);
      let sum = sorted[i] + sorted[scout] + sorted[end];
      if (sum === 0) {
        result.push([sorted[i], sorted[scout], sorted[end]]);
        end --
        scout ++
      } else if (sum > 0) {
        end--;
      } else if (sum < 0) {
        scout++;
      }
    }
  }
  return result;
};

// console.log(threeSum([-1,0,1,0]));
// console.log(threeSum([-2, 0, 0, 2, 2]));
// console.log(threeSum([1,1,-2]));
// console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));
