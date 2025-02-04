// Navigation by parentElement, Children ,previousElementSibling
let heading4 = document.querySelector("h4");
console.log(heading4.parentElement);

let parent = document.querySelector("div");
console.log(parent.children)
console.log(parent.childElementCount);
console.log(parent.nextElementSibling);

let list = document.querySelector(".box ul");
console.log(list.childNodes);
console.log(list.children[1]);
console.log(list.children[1].previousElementSibling);
console.log(list.children[1].nextElementSibling);

let image = document.querySelector("img");
console.log(image.previousElementSibling);
image.previousElementSibling.style.color = "red";

