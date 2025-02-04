// SetTimeOut.
console.log("Hi there!");

setTimeout( () =>{
    console.log("Apna collage!");
}, 3000)

console.log("Welcome to!");

// Set Interval

let id = setInterval( () =>{
    console.log("Apna College");
}, 2000);

console.log(id);
clearInterval(id);

let id2 = setInterval( () =>{
    console.log("Hello world");
}, 3000);

console.log(id2);
clearInterval(id2);