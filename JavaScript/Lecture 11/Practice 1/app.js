let box = document.querySelector(".box");

async function getColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            box.style.backgroundColor = color;
            resolve("Color was Change!");
        }, delay);
    });
};

async function colorChange(){
    try{
        await getColor("purple", 1000);
        await getColor("orange", 1000);
        await getColor("blue", 1000);
        await getColor("aqua", 1000);
    }
    catch(e){
        console.log("ERROR Found!", e);
    }
}
colorChange();


// getColor("red", 1000)
// .then(()=>{
//     return getColor("skyblue", 1000);
// })
// .then(()=>{
//     return getColor("black", 1000);
// })
// .then(()=>{
//     return getColor("yellow", 1000);
// })
// .catch((e)=>{
//     console.log("NO change", e)
// })