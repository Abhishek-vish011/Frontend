let head1 = document.querySelector("h1");

function changeColor(color, delay){
   return new Promise((resolve, reject)=>{
     setTimeout(()=>{
        head1.style.color = color;
        resolve("Color change");
     }, delay);
})
}

changeColor("red", 1000)
.then(()=>{
    console.log("1st ColorSaved");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("2nd ColorSaved");
    return changeColor("yellow", 1000);
})
.then(()=>{
    console.log("3rd ColorSaved");
    return changeColor("pink", 1000);
})
.then(()=>{
    console.log("4rd ColorSaved");
    return changeColor("orange", 1000);
})
.then(()=>{
    console.log("5rd ColorSaved");
    return changeColor("purple", 1000);
})
.catch(()=>{
    console.log("Promises was Rejected");
})