// Question 1.
let nums = [1,2,3,4,5];

const square = nums.map((nums)=> nums*nums);
console.log(square);

const sum = nums.reduce((sum,el)=> sum+el);
console.log(sum);

let avg = sum /nums.length;
console.log(avg);

// Question 2.
let arr = [2,3,4,5,6];
const newNum = arr.map((nums)=> nums + 5);
console.log(newNum);

// Question 3.
let str = ["abhi", "ani","adi","addu"];
const names = str.map((str)=> str.toUpperCase());
console.log(names);

// Question 4.
const doubleAndReturnArgs = (arr, ...args)=>[
    ...arr,
    ...args.map((v)=> v*2),
];
console.log(doubleAndReturnArgs([1,2,3], 4, 4));
console.log(doubleAndReturnArgs([2], 10 ,4));

// Question 5.
const mergeObjects = (obj1, obj2)=>({...obj1, ...obj2});
console.log(mergeObjects({a:1, b:2},{c:3, d:4}));


