console.log("Question 1.")
let arr = [1,2,3,4,5,6,2,3];
for(let i=0;i<arr.length;i++){
    if(arr[i]==2){
        arr.splice(i,1);
    }
    console.log(arr[i]);
}

console.log("Question 2.")
let nums = prompt("Enter a number: ");
let count = 0;
for(let i=0;i<nums;i++){
    nums=nums/10;
    count++;
}
console.log(count);

console.log("Question 3.")
let sum = 0;
let cellNo = 6541;
let digit = 0;
while(cellNo>0){
    digit=cellNo%10;
    sum+=digit;
    cellNo=Math.floor(cellNo/10);
}
console.log(sum);

console.log("Question 4.")
let copy = 7;
let fact=1;
for(let i=1;i<=copy;i++){
   fact*=i;
   console.log(`The factorial of ${i} is ${fact}`);
}

console.log("Question 5.")
let brr = [2,5,10,4,2,7,1,9];
let larg = 0;
for(let i=0;i<brr.length;i++){
    if(larg<brr[i])
        larg=brr[i];
}
console.log(larg);