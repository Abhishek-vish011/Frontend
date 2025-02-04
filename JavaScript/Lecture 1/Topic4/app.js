let colr = "red";
if(colr==="red"){
    console.log("Stop!");
}else if(colr==="yellow"){
    console.log("Stop down");
}else if(colr==="green"){
    console.log("Go.")
}

// else statement
let age = 23;
if(age>=18){
    console.log("You can vote");
}else{
    console.log("You cannot vote");
}

// Nexted if else Conditions
let mark = 45;

if(mark>=33){
    console.log("Pass with Good Grade");
    if(mark>=80){
        console.log("Range in Topper");
    }
    else{
        console.log("Pass A1");
    }
}else{
    console.log(Fail);
}