// Textcontents
let para = document.querySelector('p');
console.dir(para);
console.log(para.innerHTML);
console.log(para.textContent);
console.log(para.innerText);
para.innerText = "Hi, I am Peter!";
console.log(para.innerText);
para.innerHTML = "Hi, <b>I am Peter!</b>";
console.log(para);

let heading = document.querySelector('h1');
console.log(heading);
console.log(heading.innerText);
heading.innerHTML = `<u>${heading.innerHTML}</u>`;
console.log(heading);

// Manipulation Attribute
let image = document.querySelector("img");
console.log(image);
let ids =  image.getAttribute("id");
console.log(ids);
let changeIds = image.setAttribute("id", 'SpiderMan');
console.log(changeIds);
let ids2 =  image.getAttribute("src");
console.log(ids2);
let chnageSrc = image.setAttribute('src', "assets/creation_3.jpeg");

// Manipulation Style
let head1 = document.querySelector("h1");
head1.style.color = "orange";
head1.style.backgroundColor = "aqua"

let boxes = document.querySelectorAll(".box a");
for(box of boxes){
    box.style.color = "red";
}

// for(let i=0;i<boxes.length;i++){

//       boxes[i].style.color = "green";
// }
