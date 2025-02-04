// Problem by Asynchrous nature.

let head = document.querySelector("h1");

function changeColor(color, delay, nextColorChange){
    setTimeout(()=>{
        head.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, ()=>{
    changeColor("orange", 1000, ()=>{
        changeColor("green", 1000, ()=>{
            changeColor("yellow", 1000, ()=>{
                changeColor("blue", 1000)
            });
        });
    });
});

// callback nesting --> callBack hell