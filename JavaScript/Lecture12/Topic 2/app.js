let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let input = document.querySelector("input");
let list = document.querySelector(".result");

    btn.addEventListener("click", async ()=>{
    let country = input.value;
    console.log(country);
    let colArr = await getCollege(country);
    console.log(colArr);
     show(colArr);
});

function show(colArr){
    list.innerText = " ";
    for(col of colArr){
        console.log(col.name)
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getCollege(country){
     try {
        let res = await axios.get(url+country);
        return res.data;
     }catch(e){
        console.log("ERROR FOUND", e);
        return [];
     }
}