// For of loop
let fruits = ["mango","banana","orange"];
for(fru of fruits){
    console.log(fru);
}

for(char of "apna"){
    console.log(char);
}

// Nested for of loops
let hero = [["tiger","ramcharan","NTR"],["Salman","Sarukh","ritik"]];
for(list of hero){
    for(hero of list){
        console.log(hero);
    }
}