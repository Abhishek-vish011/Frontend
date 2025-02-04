let name = "Abhishek";
console.log(name);

let sum = function(a,b){
    return a+b;
}
console.log(sum(2,6));

let hello = function(){
    console.log("Hello");
}
hello = function(){
    console.log("Namaste!");
}
hello();