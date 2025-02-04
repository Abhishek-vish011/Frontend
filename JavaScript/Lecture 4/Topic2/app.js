let employe = {
    names: "Varun",
    age: 21,
    work: "Developer"
};

console.log(employe);

// Get value
console.log(employe["names"]);

console.log(employe.work);
console.log(employe.age);

let obj = {
    1: "a",
    2: "b",
    null: "c",
    true: "d",
    undefined: "f"
};

console.log(obj);

console.log(obj[1]);
console.log(obj[2]);
console.log(obj[true]);
console.log(obj[null]);
console.log(obj[undefined]);

// Add / Update value

const student = {
    name: "Abhishek",
    age: 21,
    gender: "Male"
};
console.log(student);

// Change value
student.name = "Alia";
student.gender = "Female";
console.log(student);

// Add new Object.
student.city = "Bhopal";
student.percentage = 78;
student.marks = 94.4;
console.log(student);

// change marks
student.marks = [70,75,45]; 
console.log(student);

// To delete Object items
delete student.age;
console.log(student);