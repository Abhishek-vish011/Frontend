let multiGreet = function(func, n){ //higher order function
   for(let i=1;i<=n;i++){
    func();
}
}


let greet = function(){
    console.log("Hello");
}

multiGreet(greet,8); // for value pass

greet(); // To execute
greet();

//Returns a function


function oddEvenTest(request){
    if(request == "odd"){
        let oddNum = function(n){
            console.log(!(n%2==0));
        }
        return oddNum;
    } else if(request =="even"){
        let evenNum = function(n){
            console.log(n%2==0);
        }
        return evenNum;
    }else{
        console.log("Wrong request");
    }
}

let request = "odd";
let func = oddEvenTest(request);
console.log(func);