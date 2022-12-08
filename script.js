// 26. REMOVE DUPLICATES FROM SORTED ARRAY
// Do not allocate extra space for another array. You must do this by modifying
// the input array in-place O(1) extra memory

var removeDuplicates = function (nums) {
  let start = 0;
  let scout = 1;
  let k = 1;
  while (scout < nums.length) {
    if (nums[scout] === nums[start]) {
      scout++;
    } else if (nums[scout] !== nums[start]) {
      start++;
      console.log(start, scout)
      nums[start] = nums[scout];
      k++;
    }
  }
  return nums
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
console.log(removeDuplicates([1,2]));
