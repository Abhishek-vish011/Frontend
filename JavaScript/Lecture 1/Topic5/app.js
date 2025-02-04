// truthy value (Everything else(accept falsy value))
if(true){
    console.log("Its has true!")
}else{
    console.log("Its has false!")
}
if(1){
    console.log("Its has true!")
}else{
    console.log("Its has false!")
}
if(" "){
    console.log("Its has true!")
}else{
    console.log("Its has false!")
}


// falsy value
// (false, 0, -0, on(BigInt value), ""(empty value), null, undefined, NaN)
if(0){
    console.log("Its has true!")
}else{
    console.log("Its has false!")
}
if(-0){
    console.log("Its has true!")
}else{
    console.log("Its has false!")
}
if(""){
    console.log("Its has true!")
}else{
    console.log("Its has false!")
}