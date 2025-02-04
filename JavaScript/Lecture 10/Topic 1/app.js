function hello(){
    console.log("Inside hello fx");
    console.log("Hello World");
}

function demo(){
    console.log("Calling hello fnx");
    hello();
}
console.log("Calling demo fnx");
demo();
console.log("Okay! done");

// Visualizing the Call Stack

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two() + one();
    console.log(ans);
}

three();