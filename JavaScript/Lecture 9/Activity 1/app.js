let head1 = document.querySelector('h1');
let button = document.querySelector('button');
let box = document.querySelector('.bgcolor');

button.addEventListener("click", colorGenrate)

function colorGenrate(){
    let a = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let c = Math.floor(Math.random()*255);
    head1.innerText = `rgb(${a}, ${b}, ${c})`;
    console.log("Color Updated");
    box.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}