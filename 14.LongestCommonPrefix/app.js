/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

*/

/*
Time Complexity: O(N^2)
    We check through every letter in word of each array. 
Space Complexity: O(1)
*/
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return ""
    let prefix = ""
    /*
    Loop through only the first word in strs, we only need the first because if this word does not contain a 
    prefix we can safely assume the the entire array does not contain words with a common prefix
    */ 
    for(let i = 0; i < strs[0].length; i ++) {
        // create a variable that holds the first character in the word. We can increment the character with i
        let char = strs[0][i]
        /*
        Nest a for loop that iterates the words after the first word ("flower"), we don't need to check
        each character in "flower" since we already have char
         */
        for (let j = 1; j < strs.length; j ++) {
            // If the letters in char do not equal to the letters in the remaining words return the prefix
            // If the first letter does not match the first letter in the other words, we immediately return ""
            // prefix variable will constantly contain the updated prefix value.
            if(char !== strs[j][i]) return prefix
        }
        // after the strs array is iterated, we exit and add the prefixes
        // then we start the outer loop with an incremented value.
        prefix += char
    }
    // if all words match, we return prefix here
    return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"]))