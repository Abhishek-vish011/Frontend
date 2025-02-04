// Manipulating Style Using classList
let img = document.querySelector("img");
console.dir(img.classList);

let heading = document.querySelector("h1");
console.log(heading.classList);
// To add new Class.
heading.classList.add("mainHead", "hero", "green");
console.log(heading.classList)

// To Remove class
heading.classList.remove("hero");
console.log(heading.classList);

// To check exist or Not.
console.log(heading.classList.contains('underLine'));
console.log(heading.classList.contains('green'));

// toggle
console.log(heading.classList.toggle('green'));
console.log(heading.classList);
console.log(heading.classList.toggle('underLine'));
console.log(heading.classList);

let chngeColor = document.querySelector(".box");
console.log(chngeColor.classList);
chngeColor.classList.add('yellowBg');
console.log(chngeColor.classList);