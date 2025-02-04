let color = ["red","blue","black"];
// indexOf()
console.log(color.indexOf("blue"));
console.log(color.indexOf("black"));
console.log(color.indexOf("purple"));

// includes()
console.log(color.includes("red"));

// Concatenation()
let cars = ["BMW","Safari","Expresso","XUV"];
let bike = ["HF-delucks","spelender","TVS-sport"];

let both = cars.concat(bike);
console.log(both);

// reverse()
let revers = cars.reverse();
console.log(revers);

// slice()
let book = ["maths","english","hindi","science"];
console.log(book.slice(2));
console.log(book.slice(1,4));
console.log(book.slice(-1));

// Splice()
let stars = ["Akshye","Suhant","Sahid","shradhha","Varun","Ranvijay"];
console.log(stars.splice(5));
console.log(stars);
console.log(stars.splice(1,3));
console.log(stars);
console.log(stars.splice(0,1,"alia","salman"));
console.log(stars);
stars.splice(2,0,"sapna","sarukh","bobbydeol");
console.log(stars)
console.log(stars.splice());

// Sort()Array
let celebraties = ["Akshye","Suhant","Sahid","shradhha","Varun","Ranvijay"];
console.log(celebraties.sort());
let nums = [2,5,3,7,9,1];
console.log(nums.sort());