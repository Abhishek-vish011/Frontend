let favorite = "RRR";
let guess = prompt("Enter Movies name: ");
while((guess!=favorite)){
    if(guess=="quit"){
        alert("Your Exist from game!");
        break;
    }
    guess = prompt(`${guess} is wrong guess again:`);
}
if(guess==favorite)
alert("Congratulation you guess Right!");
// else
// alert("Your Exist from game!");