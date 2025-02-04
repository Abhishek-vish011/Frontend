// Destructuring
let student = ["Abhishek", "Rohit", "Virat", "Sahid"];
let [winner, runnner, ...others] = student;
console.log(winner, runnner);

// For object

const member = {
    name: "Karan",
    age: 35,
    study: "PG",
    area: ["Bhopal", "Sehore", "Shyampur", "Indore"],
    pass: 1234,
};

const {name: user, pass: password, city = "astha"} = member;

console.log(password);
console.log(user);
