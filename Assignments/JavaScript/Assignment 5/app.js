// Question 1
let arr = [2,4,21,3,56,35,11,45,5];
let n = 5;

function arrElement(arr, n){
   for(let i=0;i<arr.length;i++){
    if(arr[i]>n){
        console.log(arr[i]);
    }
   }
}

arrElement(arr, n);

// Question 2
let str = "abcdabcdefgggh";
function uniqueString(str){
    let ans = "";
    for(let i=0;i<str.length;i++){
        let curChar = str[i];
        if(ans.indexOf(curChar) == -1){
            ans+=curChar;
        }
    }
    return ans;
}

console.log(uniqueString(str));

// Question 3
let country = ["Australia", "Germany", "United State of America"];
function longestCountry(country){
    let ansIdx = 0;
    for(let i=0;i<country.length;i++){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
console.log(longestCountry(country));

// Question 4
let strNew = "Australia";
function checkVowel(strNew){
    let count = 0;
    for(let i=0;i<strNew.length;i++){
         if(strNew[i]=='a' || strNew[i]=='e' || strNew[i]=='i' || strNew[i]=='o' || strNew[i]=='u' ){
            count++;
         }
    }
    return count;
}
console.log(checkVowel(strNew));

// Question 5

let start = 10;
let end = 20;
function randomNum(start,end){
    let num = end - start;
    let randomNumber = Math.floor(Math.random()*num)+start;
    return randomNumber;
}
console.log(randomNum(start,end));