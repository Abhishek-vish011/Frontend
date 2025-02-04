function sum(...arr){
    for(let i=0;i<arr.length;i++){
        console.log("You gave us: ", arr[i]);
    }
}
let arr = [2,4,6,1,3,5];
sum(...arr);

function min(){
    console.log(arguments);
    console.log(arguments.length);
}
min(1,2,3,4,5);

function sum1(...args){
   return args.reduce((sum1, el)=> sum1+el);
}

console.log(sum1(1,2,3,4));

function minVal(msg, ...args){
    console.log(msg);
   return args.reduce((min, el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
}
console.log(minVal("Hello", 5,4,3,2,1));