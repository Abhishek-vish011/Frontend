const classInfo = {
    aditya: {
        grade: "A",
        city: "Betul"
    },
    abhishek: {
        grade: "A+",
        city: "Bhopal"
    },
    amin: {
        grade: "AB",
        city: "Anandnager"
    }
};
console.log(classInfo);
// Add New Object of Object
classInfo.aman = {grade: "AA", city: "Bihar", college: "TIT"}

// Add new Object
classInfo.abhishek.college = "TIT";
classInfo.aditya.college = "TIT";
classInfo.amin.college = "TIT";
console.log(classInfo);

// Array of Object
const classRoom = [
    {
        namee: "atul",
        classes: "2nd",
        sub: "maths"
    },
    {
        namee: "Krish",
        classes: "4th",
        sub: "science"
    },
    {
        namee: "habit",
        classes: "1st",
        sub: "Biology"
    }
];

console.log(classRoom[0])
console.log(classRoom[1].sub)
console.log(classRoom[3] = {namee: "Sahid", classes: "5th", sub: "PCM"});
console.log(classRoom)
