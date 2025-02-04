let input = document.querySelector("#edit");
let para = document.querySelector("p");

input.addEventListener("input", function(){
    para.innerText = input.value;
    console.log(input.value);
});