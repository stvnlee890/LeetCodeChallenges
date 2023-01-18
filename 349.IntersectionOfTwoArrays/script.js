/*
349. Intersection of Two Arrays

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the
result must be unique and you may return the result in any order.
*/

/*
Time Complexity: O(N)
Space Complexity: O(N)
*/
var intersection = function (nums1, nums2) {
  // create map to keep track of numbers in the shortest array
  let map = {};
  let short;
  let long;
  /* 
  create conditional to initialize short and long array because we want to map 
  the shorter array. 
  */
  if(nums1.length < nums2.length) {
    short = nums2
    long = nums1
  } else {
    short = nums1
    long = nums2
  }

  /*
  Create loop to map element into object Time: O(N)
  */
  for (let i = 0; i < short.length; i++) {
    if (!map[short[i]]) {
      map[short[i]] = 1;
    } else {
      map[short[i]]++;
    }
  }

  // Loop over second array Time: O(N)
  // Space: O(N) depends on how many values intersect worst case still O(N) 
  // because it's dependent on the longest array size.
  let arr = [];
  for (let i = 0; i < long.length; i++) {
    // If our mapped values have a value greater than zero push to arr
    if (map[long[i]] > 0) {
      arr.push(long[i]);
      // reassign mapped key to 0 to avoid pushing duplicate value into arr
      // it asks that we return unique values.
      map[long[i]] = 0
    }
  }
  return arr
};

console.log(intersection([4,9,5], [9,4,9,8,4]));
