async function greet(){
    throw "Weak Connection!"
    return "Hello world!";
}
greet()
.then((result)=>{
    console.log("Complete Promises!");
    console.log(result);
})
.catch((err)=>{
    console.log("Promises was Rejected!");
    console.log("Detected error is:", err)
})

let demo = async () => {
    return 5;
}

// Await Keywords
function getNum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve("Random Number is:", num);
        }, 1000);
    });
}

async function demo1(){
     await getNum();
     await getNum();
     await getNum();
     await getNum();
}
demo1()


// Color change;
let head = document.querySelector("h1");


async function changeColor(color, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let number = Math.floor(Math.random()*10)+1;
            if(number>3){
                reject("Promise rejected!");
            }
             head.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve("Color Changed!");
        }, delay);
    });
}

async function colorCall(){
    try{
        await changeColor("violet", 1000);
        await changeColor("indigo", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        await changeColor("orange", 1000);
    }
    catch(err){
        console.log("Error caught",err);
    }

    let a = 5;
    console.log(a);
    console.log("Updated value:", a+3);

}
colorCall()