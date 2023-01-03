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

// const obj = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };
// var romanToInt = function (s) {
//   let total = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i - 1]] < obj[s[i]]) {
//         // Because the index next afterwards gets added, you need to subtract it again.
//       total += obj[s[i]] - obj[s[i - 1]] - obj[s[i - 1]];
//     } else {
//       total += obj[s[i]];
//     }
//   }
//   return total
// };
// console.log(romanToInt("MCMXCIV"));

// ===== 14. LONGEST COMMON PREFIX =====

// SOLUTION CODE
// var longestCommonPrefix = function (strs) {
//   let prefix = "";
//   if(strs.length === 0) return prefix;
//   for (let i = 0; i < strs[0].length; i ++) {
//     const character = strs[0][i]
//     for(let j = 0; j < strs.length; j ++) {
//       if(strs[j][i] !== character) return prefix
//     }
//     prefix += character
//   }
//   return prefix
// };
// console.log(longestCommonPrefix(["pajama", "puma", "potato"]));

// ===== 20. Valid Parenthesis ====
// use hash map
// var isValid = function (s) {
//   let obj = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
//   };

//   let arr = [];
// // obj[keys] stores the value of the key, so when we move on to the next iteration
// // we hit the else if statement. What the else if statement is doing here is "killing two birds with one stone"
// // we're popping off the value in the array and checking that value with the current value in the index. so with the argument isValid("()[]{}")
// // we start off with an empty array every other iteration.
//   for (let i = 0; i < s.length; i++) {
//     const keys = s[i];
//     if (obj[keys]) {
//       arr.push(obj[keys]);
//       console.log(arr)
//       // arr.pop directly mutates the array.
//       // So everytime this statement is false, we're always restarting with a new array.
//       // "({)}" this would come out as false and hit the else statement
//     } else if (keys !== arr.pop()) {
//       return false;
//     }
//   }
//   console.log(arr)
//   return !arr.length;
// };

// console.log(isValid("()[]{}"));

// ===== 27. Remove Element ======
// TIME COMPLEXITY: O(n)
// SPACE COMPLEXITY: O(1)

// var removeElement = function (nums, val) {
//   let start = 0;
//   while (start < nums.length) {
//     if (nums[start] === val) {
//       nums.splice(start, 1)
//       // we have to decrement start because we're modifying the original array in-place.
//       // so after a new loop, we might "skip" over a value and not splice it.
//       start--;
//     } else {
//       start++;
//     }
//   }
//   return nums.length
// };

// console.log(removeElement([0,1,2,2,3,0,4,2], 2));

// 1. Two Sum
// Unsorted array
// TIME COMPLEXITY: O(N)
// we traverse through each element in the array
// SPACE COMPLEXITY: O(N)
// we store each element of the array, BEST CASE, we only store two values. But worst case is that
// the two elements are at the end of the array.

// var twoSum = function(nums, target) {
//   let map = new Map()
//   console.log(map)
//   for (let i = 0; i < nums.length; i++) {
//     let num1 = nums[i]
//     let result = target - num1
//     if (map.has(result)) {
//       return [map.get(result), i]
//     }
//     map.set(num1, i);
//   }
// }

// console.log(twoSum([1,4,2,7,11,15], 9))

// TIME COMPLEXTIY: O(N^2)
// SPACE COMPLEXITY: O(1)
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       let result = target - nums[i];
//       if (nums[j] === result) {
//         return [i, j];
//       }
//     }
//   }
// };

// console.log(twoSum([2, 11, 15, 7], 9));

// 124. Valid Palindrome
// var isPalindrome = function (s) {
//   const regex = /[^A-Za-z0-9]/g;
//   const newStr = s.replace(regex, "").toLowerCase();
//   let backwards = "";
//   for (let i = newStr.length -1; i >= 0; i--) {
//     backwards += newStr[i];
//   }
//   return backwards === newStr
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

// 83. Remove Duplicate from Sorted List - Singly Linked List

// var deleteDuplicates = function (head) {
//   if(!head) return head
//   let curr = head
//   let next = curr.next

//   while(next) {
//     if(curr.val !== next.val) {
//       curr = curr.next
//     } else {
//       next = next.next
//       curr.next = next
//     }
//   }
//   return head
// }

// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// var groupAnagrams = function (strs) {
//   const map = new Map();
//   console.log(map)
//   for (const original of strs) {
//     const sorted = original
//       .split("")
//       .sort((a, b) => a.localeCompare(b))
//       .join("");
//     const values = map.get(sorted) || [];
//     values.push(original);
//     map.set(sorted, values);
//   }
//   return [...map.values()];
// };

var groupAnagrams = function (strs) {
  if (!strs) return [];
  let hash = {};
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i]
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    if (!hash[sorted]) {
      hash[sorted] = [strs[i]];
    } else {
      hash[sorted].push(strs[i]);
    }
  }
  return Object.values(hash);
};
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams("tea"));
