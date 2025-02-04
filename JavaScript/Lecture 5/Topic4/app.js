let sum = 54; // Global Scopes

function calSum(a,b){
    let sum = a+b; // Function Scopes
    console.log(sum);
}

calSum(1,3);

// Block Scope

{
    let z = 4;
    const x = 4;
    var y = 4;
}
console.log(y);
console.log(x);
console.log(z);

let age = 24;
if(age >= 18){
    let str = adult;
}
console.log(str);

// Lexical Scope

function outerFunc(){
    let d = 7;
    let e = 9;
    function innerFunc(){
        let s =20;
        console.log(d);
        console.log(e);
    }
    console.log(s);
    innerFunc();
}