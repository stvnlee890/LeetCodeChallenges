// 189. Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative


// Time Complexity: O(N) because worst case is every element in array is shifted based on size of K which can be really slow in this case
// Space Complexity: O(1) we create constant space with the rotate variable
var rotate = function (nums, k) {
// k % nums.length will give us an accurate k number of rotation based on the size of array
// if the rotation is larger than k, using modulo allows us to know the amount of steps we need to rotate
 k = k % nums.length
 // we store the resulting elements that need to rotate based on the new k value
 let rotate = nums.splice(nums.length - k)
 for (let i = rotate.length - 1; i >= 0; i --) {
    // we mutate original array by adding elements to beginning
    nums.unshift(rotate[i])
 }
};
console.log(rotate([1,2,3,4,5,6,7], 3));

