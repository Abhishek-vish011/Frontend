// Array References
let arr = ['a','b','c'];
console.log(arr);
let arrCopy = arr;
console.log(arrCopy);
console.log(arr==arrCopy);
arrCopy.push("e");
console.log(arr);

// constant Array
const brr = [4,5,6];
console.log(brr);
brr.push(8);
console.log(brr);
brr.pop();
console.log(brr);
// brr = [8,9,5]; // this is not possible in case of const.

// Nested Arrays (Multi-Dimension Array)
let nums = [[4,5,6],[6,5,4],[2,4,6]];
console.log(nums);
console.log(nums[0][2]);
console.log(nums[1][0]);