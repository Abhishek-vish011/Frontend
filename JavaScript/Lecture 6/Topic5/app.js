const student = {
    name: "Abhishek",
    marks: 78,
    prop: this, //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () =>{
        console.log(this); //parent's scope
        return this.marks;
    },
    getInfo: function(){
        setTimeout(()=>{
            console.log(this);
            console.log("Apna college"); //Student object
        }, 2000);
    },
    getInfo2: function(){
        setTimeout(function(){
            console.log(this);
            console.log("Welcome!"); //Window object
        }, 2000);
    }
};
console.log(student);
console.log(student.getName());
console.log(student.getMarks());
const a = 5; //global scope