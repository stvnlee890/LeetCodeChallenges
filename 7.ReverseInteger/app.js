/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
*/

/*
Time Complexity: O(N)
Space Complexity: O(1)

This solution does pass the leetcode challenge but need to figure out a way to not store a 32-bit integer before checking
*/
var reverse = function(x) {
    let str = x.toString()
    let neg = ""
    let result = ""
    const max = 2147483647
    for (let i = str.length -1; i >= 0; i --) {
        if(str[i] !== "-") result += str[i]
        else neg += str[i]
    }
    if(neg === "") {
        if(+result > max) return 0
        return +result
    } else {
        if(+result > max) return 0
        return +(neg + result)
    }
};


console.log(reverse(-123))