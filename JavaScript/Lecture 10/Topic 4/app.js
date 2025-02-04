// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }
    //    CallBacks Hell.
// savetoDb("Student Data", () => {
//     console.log("Success: Your data was saved");
//     savetoDb("Hello world", () => {
//         console.log("success2: Data2 saved");
//         savetoDb("Abhishek", () => {
//             console.log("success3: Data3 saved");
//         }, () => {
//             console.log(("Failure: weak connection"));
//         })
//     }, () => {
//         console.log("Failure2: Weak connection");
//     })
// }, () => {
//     console.log("Failure: Weak connection. data not save");
// })

function savetoDb(data) {
   return new Promise((resolve, reject)=>{
       let internetSpeed = Math.floor(Math.random() * 10) + 1;
           if (internetSpeed > 4) {
               resolve("Success: Your data was saved");
           } else {
               reject("Failure: Weak connection. data not save");
           }
   });
}

// Promise (Improve Version)
savetoDb("Apna India")
.then((result)=>{
    console.log("Data1 saved");
    console.log("Result of prmises: ",result);
    return savetoDb("Abhishek");
})
.then((result)=>{
    console.log("Data2 Saved");
    console.log("Result of prmises: ",result);
    return savetoDb("Rama");
})
.then((result)=>{
    console.log("Data3 Saved");
    console.log("Result of prmises: ",result);
})
.catch((error)=>{
    console.log("Promise was rejected");
    console.log("Error of promises: ", error);
})


// function StudentData(){
//     let arr = ["Abhishek", "animesh", "aditya"];
    
//     for(let i=0;i<arr.length;i++){
//         setTimeout(()=>{
//             console.log(savetoDb(arr[i]));
//         }, 1000*(i+1))
//     }
// }