// Switch Statement

let color = "red";

switch(color){
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go!");
        break;
        
    default:
        console.log("Broken Light");
}

let a = 5;
let b = 6;
let op = '%';

switch(op){
    case '+':
        console.log(`Sum is : ${a+b}`);
        break;
    case '-':
        console.log(`Difference is : ${a-b}`);
        break;
    case '*':
        console.log(`Product is : ${a*b}`);
        break;
    case '/':
        console.log(`Division is : ${a/b}`);
        break;
    case '%':
        console.log(`Modulus is : ${a%b}`);
        break;
    case '**':
        console.log(`Exponentional is : ${a**b}`);
        break;
   default :
       console.log("Enter Valide Operator!");
}