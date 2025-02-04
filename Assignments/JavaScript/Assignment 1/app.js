// Question 1.
let num = 20;
if(num%10===0){
    console.log("Good");
}
else{
    console.log("Bad");
}

// Question 2
let names = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
let detail = `${names} is ${age} years old`;
alert(detail);

// Question 3
let nums = 2;
switch(nums){
    case 1:
        console.log("January, February,March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default :
       console.log("Invalide Quarter");
}

// Question 4

let city = "Abhinatri";
if((city[0]==='A' || city[0]==='a') && city.length>5){
    console.log("Golden Strings");
}else{
    console.log("Not golden String")
}

// Question 5
let x = 5;
let y = 18;
let z = 13;
if(x > y){
    if(x>z){
        console.log(x, "is largest");
    }else{
        console.log(z, "is largest");
    }
}else {
    if(y>z){
        console.log(y, "is largest");
    }else{
        console.log(z, "is largest");
    }
}


// Question 6
let a = 32;
let b = 47852;
if((a%10) == (b%10)){
    console.log("This numbers has same last digits");
}else{
    console.log("Not his 2 number");
}