// Spread
let str = "ApnaCollege";
console.log(...str);

let arr = [2,3,5,6,2,1,4];
console.log(Math.min(...arr));
console.log(...arr);

// Spread with Array Literals

let brr = [12,45,66,33,55,32];
let newArr = [...brr];
console.log(newArr);

let names = "VinayVidhyeRama";
let chars = [...names];
console.log(chars);

// Spread with Object Literal

const student = {
    name: "Abhishek",
    class: 12,
    per: 77,
};
let data = {...student, id: 123};
console.log(data);

let idx = [3,8,4,5,1,7,9];
let indx = {...idx};
console.log(indx);