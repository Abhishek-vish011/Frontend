let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let del = document.querySelectorAll(".delete");

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = input.value;
    
    
    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("delete");

       li.appendChild(del);
       ul.appendChild(li);
       input.value = "";
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();
    }
});

// for(dels of del){
//     dels.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// }