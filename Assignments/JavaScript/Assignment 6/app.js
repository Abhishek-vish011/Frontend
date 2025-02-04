// Question 1.
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total+=number;
    }
    return total/arr.length;
}
let arr = [1,3,5,4,7];
console.log(arrayAverage(arr));

// Question2.
const isEven = (n) => {
    if(n%2==0){
        return "its Even";
    }else{
        return "Not Even";
    }
}
let n = 5;
console.log(isEven(n));

// Question 3.
const object = {
    massege: "Hello, world",
    logMassege(){
        console.log(this.massege);
    }
};
setTimeout(object.logMassege(), 1000);

// Question 4.
let length = 4;
function callback(){
    console.log(this.length);
}
const obj = {
    length: 5,
    method(callback){
        callback();
    },
};
obj.method(callback, 1, 2);
