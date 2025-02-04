const square = (n) =>(n*n)
let n = prompt("Enter a number: ");
console.log(square(n));

let id = setInterval(()=>{
    console.log("Hello world");
},2000)

setTimeout(()=>{
    clearInterval(id);
    console.log("Stop!")
}, 10000)