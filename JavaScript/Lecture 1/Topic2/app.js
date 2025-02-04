// 1. Aruthmatic Operators.(+, -, *, /, %, **)
let a = 20;
let b = 10;
console.log(a+b);

// Unary Operators (++, --)
console.log(a++, b--);
console.log(++a, --b);

// Assignment Operators. (=, +=, -=, /=, *=, %=)
let sum = 11;
sum+=a;
console.log(sum);

// Comparison Operators (>, >=, <, <=, ==, !=, ===, !==)
let age = 18;
console.log(age > 18)

// Comparison for non-number ('a'=61, 'A'=41)
console.log('a'>'A');

// Logical Operators (! (NOT), && (AND), || (OR))
let date = 5;
let month = "jan";
if((date==5) && (month=="jan")){
    console.log("Happy Birthday");
}
else{
    console.log("This not his day");
}

