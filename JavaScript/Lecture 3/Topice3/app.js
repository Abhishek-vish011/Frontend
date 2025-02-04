let fruit = ["mango","apple","banana","orange","pineapple"];
fruit.push("litchi");
for(let i=0;i<fruit.length;i++){
    console.log(i, fruit[i]);
}
for(let j=fruit.length-1;j>=0;j--){
    console.log(j, fruit[j]);
}

// Loops with Arrays
let hero = [["ironman","tonyStark","spiderman"],["salman","sarukh","tiger"]];
for(let i=0;i<hero.length;i++){
    console.log(`List #${i}`,hero[i]);
    for(let j=0;j<hero[i].length;j++){
        console.log(`j=${j} ${hero[i][j]}`);
    }
}

let students = [
    ["sourabh",77],
    ["krish",83],
    ["rahul",87]
];
for(let i=0;i<students.length;i++){
    console.log(`list #${i} ${students[i]}`);
    for(let j=0;j<students[i].length;j++){
        console.log(students[i][j]);
    }
}