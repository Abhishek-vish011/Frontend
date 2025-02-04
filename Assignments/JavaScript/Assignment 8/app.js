// Question 1.
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = "Click Me!";

let body = document.querySelector('body');
body.append(input);
body.append(button);

// Question 2.
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// Question 3.
let btn = document.querySelector('#btn');
btn.classList.add("colorBtn");

// Question 4.
let head1 = document.createElement('h1');
head1.innerHTML = "<u>DOM Practice.</u>";
head1.classList.add("head");
body.append(head1);

// Question 5.
let para = document.createElement('p');
para.innerHTML = "Apna College <b>Delta</b> Practice.";
para.classList.add("p1");
body.append(para);