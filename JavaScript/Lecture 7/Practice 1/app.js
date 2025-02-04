// Question 1.
let arr = [10,20,30,40,50,60];
let result = arr.every((el)=>{
    return el%10==0;
});
console.log(result);

// Question 2.

let nums = [5,7,3,4,8,2];
let finalVal = nums.reduce((min,el)=>{
    if(min<el){
        return min;
    }else{
        return el;
    }
});

console.log(finalVal);