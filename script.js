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

// using a for loop
// var removeDuplicates = function (nums) {
//     let insertIndex = 1
//     for (let i = 1; i < nums.length; i ++) {
//         if(nums[i - 1] !== nums[i]) {
//             nums[insertIndex] = nums[i]
//             insertIndex ++
//         }
//     }
//     return insertIndex
// }
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// ===== 9. PALINDROME NUMBER =====

// var isPalindrome = function (x) {
//   // Convert number to string
//   const str = x.toString();
//   // create left and right pointers
//   let left = 0;
//   let right = str.length -1;
//   while (left < right) {
//     if (str[left] === str[right]) {
//       left++;
//       right--;
//     } else {
//       return false;
//     }
//   }
//   return true
// };

// console.log(isPalindrome(10));

// ===== 13. Roman to Integer ====

const obj = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i - 1]] < obj[s[i]]) {
        // Because the index next afterwards gets added, you need to subtract it again. 
      total += obj[s[i]] - obj[s[i - 1]] - obj[s[i - 1]];
    } else {
      total += obj[s[i]];
    }
  }
  return total
};
console.log(romanToInt("MCMXCIV"));
