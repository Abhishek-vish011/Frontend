// Reduce

let arr = [3,5,2,6,7,4,5];

let result = arr.reduce((res,el)=>{
    console.log(res);
    return res+el;
});
console.log(result);

// Finding Maximum in an array

let nums = [2,6,9,4,6,7,8];
let finalVal = nums.reduce((max, el)=>{
    if(el>max){
        return el;
    }else{
        return max;
    }
});
console.log(finalVal);