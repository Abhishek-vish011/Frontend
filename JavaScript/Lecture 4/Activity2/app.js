const nums = prompt("Enter a Max number: ");
let randNum = Math.floor(Math.random()*nums)+1;
console.log(randNum);

let guess = prompt("Enter a number to guess!");
while(true){
    if("quit"==guess){
        console.log(alert("You Quit the game!"));
        break;
    }
    if(randNum==guess){
        console.log(alert("You guess right!, Congratss! :) "));
        break;
    }else if(randNum<guess){
        guess = prompt("Your guess was large. Please Try again :( ");
    }else{
        guess = prompt("Your guess was small. Please Try again :( ");
    }
}

