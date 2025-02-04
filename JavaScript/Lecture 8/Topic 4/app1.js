// Adding Element.
let newPara = document.createElement('p');
console.dir(newPara);
newPara.innerText = "Hello Indian, I am New Para";
// appendChild
let bodyy = document.querySelector('body');
bodyy.appendChild(newPara);

let box = document.querySelector('.box');
box.appendChild(newPara)

let btn = document.createElement('button');
btn.innerText = "Start Now"
console.log(btn);
box.appendChild(btn);

// append() Text add in last 
newPara.append(" Introduce By Abhishek! Go to Start ", btn);
newPara.append(" ,Hurry Up..");

// prepend() Text add in Start 
newPara.prepend("Coder has error like problem :) ");

// insertAdjecent
let bigBtn = document.createElement('button');
bigBtn.innerText = "BUTTON!!!";
let pgraph = document.querySelector('p');
pgraph.insertAdjacentElement('beforebegin',bigBtn);
// pgraph.insertAdjacentElement('afterbegin',bigBtn);
// pgraph.insertAdjacentElement('beforeend',bigBtn);
// pgraph.insertAdjacentElement('afterend',bigBtn);


// Removing Elements
newPara.remove();
bodyy.removeChild(bigBtn);
btn.remove();