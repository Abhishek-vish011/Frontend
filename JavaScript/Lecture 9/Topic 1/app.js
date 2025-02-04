
let btns = document.querySelectorAll("button");
for (btn of btns){
     
    // btn.onclick = sayHello;
    // btn.onclick = sayName;
    // btn.onmouseenter = function(){
//     console.log("you entered a button");
// }
    // btn.addEventListener("click", sayHello);
    // btn.addEventListener("click", sayName);
    btn.addEventListener("dblclick", function(){
        console.log("double clicked");
    });
}
function sayHello(){
    alert("Hello!");
}
function sayName(){
    alert("Coder Performance well!");
}