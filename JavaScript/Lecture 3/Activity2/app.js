let todo = [];

let req = prompt("Please enter your request");

while(true){
    if(req == "quit"){
        console.log("quitting app");
        break;
    }
    if(req == "List"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++){
            console.log(i, todo[i]);
        }
        console.log("-----------");
    }else if(req == "add"){
        let task = prompt("please Enter the task to add:");
        todo.push(task);
       console.log("task added");
    }else if(req == "delete"){
       let idx = prompt("Enter the task index");
       todo.splice(idx, 1);
       console.log("task deleted");
    }else{
         console.log("Wrong request");
         alert("Wrong request");
    }
    req = prompt("Please enter your request");
}
