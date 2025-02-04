let arr = [2,3,5,7,4];
let n = 4;
console.log(arr);
console.log(arr.slice(0,n));
console.log(arr.slice(arr.length-n));

// ques 3;
let str = prompt("enter a string");
if(str.length == 0){
    console.log("Its empty string");
}else{
    console.log("string is not empty");
}

// Ques 4;
let names = "MultiMedia";
let idx = 3;
if(names[idx]==names[idx].toLowerCase()){
    console.log("Yes is lowercase");
}else{
    console.log("Not Lowercase");
}

// Ques 5;
let sends = prompt("enter string");
console.log(`original string = ${sends}`);
console.log(`string without space = ${sends.trim()}`);

// ques 6;
let brr = ["hello",'b',23,64,99,-6];
let item = 64;
if(brr.indexOf(item)!= -1){
    console.log("Element exists in array");
}else{
    console.log("Element doesn't exist in array");
}