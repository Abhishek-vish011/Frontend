let para1 = document.createElement('p');
para1.innerText = "Hey I'm Red!";
para1.classList.add("red");
document.querySelector('body').append(para1);

let head3 = document.createElement('h3');
head3.innerText = "I'm a blue h3!";
head3.classList.add("blue");
document.querySelector('body').append(head3);

let division = document.createElement('div');
division.classList.add("box");
let head1 = document.createElement('h1');
head1.innerText = "I'm in a div";
division.append(head1);
let par = document.createElement('p');
par.innerText = "ME TOO!";
division.append(par);

document.querySelector('body').append(division);