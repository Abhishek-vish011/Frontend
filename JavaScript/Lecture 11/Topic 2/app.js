// JSON data -> js object
let jsonApi = '{"fact":"The life expectancy of cats has nearly doubled over the last fifty years.","length":73}';

let validRespon = JSON.parse(jsonApi);
console.log(validRespon);
console.log(validRespon.fact);

// JS object -> JSON data

let students = {
    names: "abhishek",
    marks: 98,
    Class: "12th",
    Grade: "A"
};
JSON.stringify(students);
