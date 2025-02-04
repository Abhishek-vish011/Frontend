const students = {
    names: "Abhishek",
    age: 22,
    eng: 79,
    math: 98,
    phy: 87,
    getAvg(){
        console.log(this);
        let avg = (this.eng+ this.math+ this.phy)/3;
        console.log(`${this.names} got avg marks = ${avg}`);
    }
}

students.getAvg();

function getAvg(){
    console.log(this);
}

console.log(getAvg());