let  url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
let para = document.querySelector("#fact");

btn.addEventListener("click", async ()=>{
    let cats = await getFetch();
    para.innerText = cats;
});

async function getFetch(){
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e){
        return "NO fact found!";
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random";
let button = document.querySelector(".btn");

button.addEventListener("click", async ()=>{
    let dogImg = await getImage();
    let image = document.querySelector("img");
    // image.setAttribute("src", dogImg);
    image.src = dogImg;
});
async function getImage(){
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch(e){
        return "/";
    }
}