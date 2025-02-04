// Explicit return
const sum = (a,b) =>{
    return a+b;
}

console.log(sum(2,4));

const cube = n => {
    console.log(n*n*n);
}

cube(7);

const power = (x,y) =>{
    console.log(x**y);
}
power(2,5);

const hello = () =>{
    console.log("Bigg Boss");
}
hello();

// Arrow Function
// Implicit return
const multiple = (u,v) =>(
    u*v
);
console.log(multiple(5,5));