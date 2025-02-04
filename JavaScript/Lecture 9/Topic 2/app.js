let btn = document.querySelector("button");
let para = document.querySelector("p");
let head1 = document.querySelector("h1");
let head3 = document.querySelector("h3");

function colorChnage(){
    console.log(this.innerText);
    this.style.backgroundColor = "grey";
}
btn.addEventListener("click", colorChnage);
para.addEventListener("click", colorChnage);
head1.addEventListener("click", colorChnage);
head3.addEventListener("click", colorChnage);