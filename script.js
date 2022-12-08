// ===== 26. REMOVE DUPLICATES FROM SORTED ARRAY =====
// Do not allocate extra space for another array. You must do this by modifying
// the input array in-place O(1) extra memory

// TIME COMPLEXITY = O(N)
    // Because N is dependent on the array length and we only traverse the array once
// SPACE COMPLEXIRY = O(N)
    // We do not create an extra array, but we do create extra memory from these variables.

// my method
// var removeDuplicates = function (nums) {
//   let start = 0;
//   let scout = 1;
//   while (scout < nums.length) {
//     if (nums[scout] === nums[start]) {
//       scout++;
//     } else if (nums[scout] !== nums[start]) {
//       start++;
//       nums[start] = nums[scout];
//     }
//   }
//   return start + 1
// };
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([1,2]));

var removeDuplicates = function (nums) {
    let insertIndex = 1
    for (let i = 1; i < nums.length; i ++) {
        if(nums[i - 1] !== nums[i]) {
            nums[insertIndex] = nums[i]
            insertIndex ++ 
        }
    }
    return insertIndex
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));