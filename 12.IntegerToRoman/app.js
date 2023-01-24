/*
12. Integer to Roman

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

*/

/*
Time Complexity: O(N);
    It's O(N) because we iterate through the entire keys in the conversion object.
Space Complexity: O(1);
    We create constant amount of additional memory to store result string and other variables.
*/

var intToRoman = function (num) {
    let conversion = {
        1000: 'M',
        900: 'CM',
        500: 'D',
        400: 'CD',
        100: 'C',
        90: 'XC',
        50: 'L',
        40: 'XL',
        10: 'X',
        9: 'IX',
        5: 'V',
        4: 'IV',
        1: 'I',
    }
    let result = ""
    const keys = Object.keys(conversion)
    let pointer = keys.length -1
    while (num > 0) {
        if(num >= keys[pointer]) {
            result += conversion[keys[pointer]]
            num -= keys[pointer]
        } else {
            pointer --
        }
    }
    return result
};

/*
EX.
input: 1994

1994 >= 1000 ---> true (result = "M")
994 >= 1000 ---> false (pointer --)
994 >= 900 ---> true (result = "M" + "CM")
94 >= 500 ---> false (pointer --)
94 >= 400 ---> false (pointer --)
...
94 >= 90 ---> true (result = "M" + "CM" + "XC")
4 >= 90 ---> false (pointer --)
...
4 >= 4 ---> true (result = "M" + "CM" + "XC" + "IV")

return result
*/