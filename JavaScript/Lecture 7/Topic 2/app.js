// Map
let num = [1,2,3,4];

let double = num.map((el)=>{
    return el*el;
})
console.log(double);

let students = [{
    name: "Abhishek",
    marks: 95
},{
    name: "Animesh",
    marks: 88
},{
    name: "Ganesh",
    marks: 87
}];

let gpa = students.map((el)=>{
      return el.marks/10;
})

// Filter Method
let digit = [2,4,1,5,6,2,7,8,9];
let even = digit.filter((e)=>{
   return e%2==0;
});
console.log(even);

// Every Method

let classNo = [2,4,6];
let school = classNo.every((el)=>{
    return el%2==0;
});

console.log(school);