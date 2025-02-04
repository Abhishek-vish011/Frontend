let students = ["aman", "atul","abhi"];
let mark = [99,89,84,45,24];
let info = ["adit",25,8.6];

console.log(info.length);
console.log(info[0][0]);
// Mutable Arrays
students[0]="abhay";
console.log(students);

// Array Methods
// Push : add to end
students.push("kartik");
console.log(students);

// Pop : delete from end & return it
students.pop();
console.log(students);

// Unshift : add to start
students.unshift("ritik");
console.log(students);

// shift : delete from start & return it
students.shift();
console.log(students);
