function caluSum(a,b){
    console.log(a*b);
    return  a+b;   
    console.log(a-b);
}
let sum = caluSum(caluSum(24,26),50);
console.log(sum);
console.log(caluSum(3,5));

function isAdult(age){
    if(age>=18){
        return "Is Adult";
    }else{
        return "Not Aduit";
    }
    console.log("NOT mature person!");
}

console.log(isAdult(22));