// For loop;
let n = 5;
// Forward condition
for(let i=1;i<=n;i++){
    console.log(i);
}

// Backward condition
for(let i=n;i>=1;i--){
    console.log(i);
}

// Print all Odd numbers (1 to x);
let x = prompt("Enter a number: ");
for(let i=1;i<=x;i++){
    if(i%2!=0){
        console.log(i);
    }
}
// print all even number (1 to x);
for(let i=1;i<=x;i++){
    if(i%2==0){
        console.log(i);
    }
}

// infinite loop
// for(let i=1; ;i++){
//     console.log(i);
// }

// print the multiple of 5
let a = prompt("enter your no.");
a = parseInt(a);
for(let i=a;i<=a*10;i=i+a){
    console.log(i);
}

// Nested for loops
for(let i=1;i<=5;i++){
    console.log(`outer loop ${i}`);
    for(let j=1;j<=5;j++){
        console.log(j);
    }
    console.log(" ");
}