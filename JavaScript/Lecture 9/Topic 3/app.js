let input = document.querySelector("input");


input.addEventListener("keydown", function(event){
    console.log(event.code);
    if(event.code == "ArrowUp"){
        console.log("Character moves forwards");
    }else if(event.code == "ArrowDown"){
        console.log("Character moves backward");
    }else if(event.code == "ArrowRight"){
        console.log("Character moves right");
    }else if(event.code == "ArrowLeft"){
        console.log("Character moves left");
    }else{
        console.log("Error");
    }
});

// input.addEventListener("keydown", function(event){
//     console.log("Code =",event.code);
//     console.log("key =",event.key);
//     console.log("ASCII value =",event.keyCode);
//     console.log("key was press");
// });

// input.addEventListener("keyup", function(){
//     console.log("key was release");
// });