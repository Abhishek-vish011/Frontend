// forEach Method
let arr = [1,2,3,4,5];

function print(el){
    console.log(el);
}

arr.forEach(print);

arr.forEach(function(el){
    console.log(el);
})
// Arrow function
arr.forEach((el) => {
    console.log(el);
})

let arrObj = [{
    name: "Abhishek",
    marks: 78
},{
    name: "Akash",
    marks: 68
},{
    name: "krishna",
    marks: 88
}];

arrObj.forEach((el)=>{
    console.log(el.name);
    console.log(el.marks);
})