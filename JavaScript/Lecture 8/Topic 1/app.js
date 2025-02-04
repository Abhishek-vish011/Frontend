// getElementById
document.getElementById("mainImg");
let imgObj = document.getElementById("mainImg");
console.log(imgObj);
console.log(imgObj.src);
imgObj.src = "assets/creation_1.png";

let para = document.getElementById("description");
console.dir(para);

// getElementByClassName
document.getElementsByClassName("oldImg");
let className = document.getElementsByClassName("oldImg");
for(let i=0;i<className.length;i++){
    console.dir(className[i]);
    console.dir(className[i].src);
    className[i].src = "assets/spiderman_img.png";
    console.log(`value of img no. ${i} is chsnged: ${className[i].src}`);
    
}

// getElementByTagName
let nameTag = document.getElementsByTagName("p");
console.dir(nameTag[0]);
nameTag[1].innerText = "Abhishek";
console.log(nameTag[1]);

// QuerySelector
console.dir(document.querySelector('h1'));
console.dir(document.querySelector('#description'));
console.dir(document.querySelectorAll('.box a'));
console.log(document.querySelector('div a'));




